exports.valid1 = {
  id: 123,
  title: 'foobar',
  content: '',
  enabled: true
};

exports.valid2 = {
  id: 123,
  title: 'foobar'
};

exports.valid3 = {
  id: 123,
  title: 'foobar',
  summary: 'foobar123.-'
};

exports.invalidId = {
  id: '123'
};

exports.missingTitle = {
  id: 123
};

exports.invalidTitle = {
  id: 123,
  title: 'foo bar'
};

exports.shortTitle = {
  id: 123,
  title: 'f'
};

exports.longTitle = {
  id: 123,
  title: 'foobarquxcorgespaneggs'
};

exports.invalidContent = {
  id: 0,
  title: 'fo',
  content: {}
};

exports.invalidEnabled = {
  id: 123,
  title: 'foobar',
  content: '',
  enabled: 'yes'
};

exports.invalidSummary1 = {
  id: 123,
  title: 'foobar',
  summary: 'foo bar'
};

exports.invalidSummary2 = {
  id: 123,
  title: 'foobar',
  summary: '$'
};
