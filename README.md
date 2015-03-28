Classnames
===========

Classnames 1.2.0 by Jed Watson, repackaged for Meteor.

```sh
meteor add maxharris9:classnames
```

The `classNames` function takes any number of arguments which can be a string or object.
The argument `'foo'` is short for `{foo: true}`. If the value of the key is falsy, it won't be included in the output.

```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }) // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

Arrays will be recursively flattened as per the rules above:

```js
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```