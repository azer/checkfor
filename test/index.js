var checkfor = require("../");
var fixtures = require("./fixtures");

var validate = checkfor({
  id: { is: Number, required: true },
  title: { is: String, required: true, matches: /^[a-z0-9]+$/, len: [2, 20] },
  summary: { is: String, allowed: ['a-z', '0-9', '.', '-'] },
  content: String,
  enabled: Boolean
});

it('does nothing if given object is valid', function(){
  expect(validate(fixtures.valid1)).to.not.exist;
  expect(validate(fixtures.valid2)).to.not.exist;
  expect(validate(fixtures.valid3)).to.not.exist;
});

it('fails if the object is empty', function(){
  expect(validate().message).to.equal('Empty content.');
});

it('fails if a field doesnt match requirements', function(){
  expect(validate(fixtures.invalidId).message).to.equal('"id" is expected to be a number.');
  expect(validate(fixtures.missingTitle).message).to.equal('"title" is missing.');
  expect(validate(fixtures.invalidTitle).message).to.equal('"foo bar" doesn\'t match the pattern /^[a-z0-9]+$/ expected for the "title" field.');
  expect(validate(fixtures.shortTitle).message).to.equal('"title" has to be at least 2 characters long.');
  expect(validate(fixtures.longTitle).message).to.equal('"title" has to be less than 21 characters.');

  expect(validate(fixtures.invalidContent).message).to.equal('"content" is expected to be a string.');
  expect(validate(fixtures.invalidEnabled).message).to.equal('"enabled" is expected to be a boolean.');
  expect(validate(fixtures.invalidSummary1).message).to.equal('"summary" allows only following characters: "a-z", "0-9", ".", "-"');
  expect(validate(fixtures.invalidSummary2).message).to.equal('"summary" allows only following characters: "a-z", "0-9", ".", "-"');

});
