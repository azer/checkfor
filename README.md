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
  title: { is: String, required: true, allowed: ['a-z', '0-9', '.', ','], len: [2, 150] },
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
