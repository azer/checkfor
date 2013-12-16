## checkfor

Validate objects with meaningful errors.

## Install

```bash
$ npm install checkfor
```

## Usage

Define a validator:

```js
checkfor = require('checkfor')

validate = checkfor({
  title: { is: String, required: true, len: [2, 150] },
  content: String
})
```

and run it against objects:

```js
validate({ title: 'hello', content: 'Lorem ipsum' })
// => undefined

validate({ title: '' })
// => [Error "title" needs to be at least 2 characthers length.]
```

See [the reference](#reference) and tests for more info.

## Reference

### is

Defines the expected type. `String`, `Number` and `Boolean` supported. Objects and Arrays aren't implemented.

### required

Validation fails if the content doesn't have the expected field. It's `false` by default.

### allowed

Specifies allowed Regex character groups for a string:

```js
{ is: String, allowed: ['a-z', '0-9', '-', '_'] }
```

### matches

Fails if the input doesn't match the defined regex pattern:

```js
{ is: String, matches: /^[a-z]+$/ }
```

### email

Fails if the input is not a valid e-mail:

```js
{ is: String, email: true }
```

### len

Fails if the input is not longer/shorter than expected:

```js
{ is: String, len: [3, 24] }
```
