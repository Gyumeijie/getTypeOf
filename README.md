# getTypeOf [![](https://travis-ci.com/Gyumeijie/getTypeOf.svg?branch=master)](https://travis-ci.com/Gyumeijie/getTypeOf)

> get the type of a javascript value

## Install

```bash
$ npm install @gyumeijie/get-type-of
```

## Usage

```js
const getTypeOf = require('@gyumeijie/get-type-of');

// get the type of built-in types

getTypeOf(undefined)   //'undefined'
getTypeOf(null)   //'null'
getTypeOf(1)   //'number'
getTypeOf('this is a string')   //'string'
getTypeOf(true)   //'boolean'
getTypeOf(Symbol())   //'symbol'
getTypeOf({})   //'object'
getTypeOf([1, 2, 3])   //'array'
getTypeOf(() => {})   //'function'
getTypeOf(Object.create(null))   //'object'
getTypeOf(Object.create(null), true)   //'object'
getTypeOf(new Date())   //'date'
getTypeOf(/regexp/)   //'regexp'

// get the type of the customized types
class Custom {
  constructor() {
    this.name = 'custom';
  }
}
getTypeOf(new Custom()); //'object';
getTypeOf(new Custom(), true); //'custom';

function Foo() {
  this.name = 'foo';
}
getTypeOf(new Foo()); //'object';
getTypeOf(new Foo(), true); //'foo';
```

## License

MIT © [Gyumeijie](https://github.com/Gyumeijie)
