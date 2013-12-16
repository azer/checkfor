exports.valid1 = {
  id: 123,
  title: 'foobar',
  content: '',
  enabled: true,
  email: 'foo@bar.com'
};

exports.valid2 = {
  id: 123,
  title: 'foobar',
  email: 'f.oo@ba-r.co.uk'
};

exports.valid3 = {
  id: 123,
  title: 'foobar',
  summary: 'foobar123.-',
  email: 'a_z-er+sp-an@e-g_gs123.mobi.tr'
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

exports.invalidEmail1 = {
  id: 1,
  title: 'hello',
  email: 'azer@'
};

exports.invalidEmail2 = {
  id: 1,
  title: 'hello',
  email: '@azer'
};

exports.invalidEmail3 = {
  id: 1,
  title: 'hello',
  email: 'azer@kodfabrik'
};

exports.invalidEmail4 = {
  id: 1,
  title: 'hello',
  email: 'azer@kodfabrik.'
};
