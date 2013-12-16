var newError = require("new-error");

module.exports = define;

function define (expectation) {
  return function (input) {
    return checkObject(input, expectation);
  };
}

function checkObject (content, reference) {
  if (!content) return newError('Empty content.');

  var name, error, options, value;
  for (name in reference) {
    options = reference[name];
    value = content[name];
    !options.is && ( options = { is: options } );

    if (error = check(value, name, options, content)) return error;
  }
}

function check (value, name, options, parent) {
  if (value == undefined && options.required)
    return newError('"{0}" is missing.', name);

  if (!parent.hasOwnProperty(name)) return;

  if (options.is(value) !== value) {
    return newError('"{0}" is expected to be a {1}.', name, typeName(options.is));
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
}

function typeName (type) {
  return type.name.toLowerCase();
}
