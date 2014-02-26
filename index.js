var newError = require("new-error");

module.exports = define;

function define (options) {
  var expectation = normalize(options);

  return function (input, ignore) {
    return checkObject(input, expectation, ignore);
  };
}

function normalize (options) {
  var result = {};

  var key;
  for (key in options) {
    if (typeof options[key] == 'function') {
      result[key] = { is: options[key] };
    } else {
      result[key] = options[key];
    }

    if (!result[key].is) {
      throw newError('"{0}" field is missing type.', key);
    }
  }

  return result;
}

function checkObject (content, reference, ignore) {
  if (!content) return newError('Empty content.');

  var name, error;
  for (name in reference) {
    if (ignore && (ignore == name || ignore.indexOf(name) > -1)) {
      continue;
    }

    error = check(content[name], name, reference[name], content);

    if (error) return error;
  }
}

function check (value, name, options, parent) {
  if (value == undefined && options.required)
    return newError('"{0}" is missing.', name);

  if (!parent.hasOwnProperty(name)) return;

  if (options.is(value) !== value) {
    return newError('"{0}" is expected to be a {1}.', name, typeName(options.is));
  }

  if (options.email && !/^[\w\.\+\-_]+@[\w\-_]+\.[\w\.]{2,10}$/.test(value)) {
    return newError('"{0}" is an invalid e-mail.', value);
  }

  if (options.allowed) {
    options.matches || (options.matches = new RegExp("^[" + options.allowed.join("") + "]*$"));
  }

  if (options.matches && !options.matches.test(value)) {
    return options.allowed
      ? newError('"{0}" allows only following characters: "{1}"', name, options.allowed.join('", "'))
      : newError('"{0}" doesn\'t match the pattern {1} expected for the "{2}" field.', value, options.matches, name);
  }

  if (options.len && typeof value == 'string') {
    if (options.len[0] > value.length)
      return newError('"{0}" has to be at least {1} characters long.', name, options.len[0]);

    if (options.len.length > 1 && options.len[1] < value.length)
      return newError('"{0}" has to be less than {1} characters.', name, options.len[1] + 1);
  }

  if (typeof value == 'number') {
    if (options.hasOwnProperty('lower') && value >= options.lower) {
      return newError('"{0}" has to be lower than {1}.', value, options.lower);
    }

    if (options.hasOwnProperty('higher') && value <= options.higher) {
      return newError('"{0}" has to be higher than {1}.', value, options.higher);
    }
  }
}

function typeName (type) {
  return type.name.toLowerCase();
}
