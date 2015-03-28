Tinytest.add('keeps object keys with truthy values', function (test) {
  test.equal(classNames({
    a: true,
    b: false,
    c: 0,
    d: null,
    e: undefined,
    f: 1,
  }), 'a f');
});

Tinytest.add('joins arrays of class names and ignore falsy values', function (test) {
  test.equal(classNames('a', 0, null, undefined, true, 1, 'b'), 'a 1 b');
});

Tinytest.add('supports heterogenous arguments', function (test) {
  test.equal(classNames({a: true}, 'b', 0), 'a b');
});

Tinytest.add('should be trimmed', function (test) {
  test.equal(classNames('', 'b', {}, ''), 'b');
});

Tinytest.add('returns an empty string for an empty configuration', function (test) {
  test.equal(classNames({}), '');
});

Tinytest.add('supports an array of class names', function (test) {
  test.equal(classNames(['a', 'b']), 'a b');
});

Tinytest.add('joins array arguments with string arguments', function (test) {
  test.equal(classNames(['a', 'b'], 'c'), 'a b c');
  test.equal(classNames('c', ['a', 'b']), 'c a b');
});

Tinytest.add('handles multiple array arguments', function (test) {
  test.equal(classNames(['a', 'b'], ['c', 'd']), 'a b c d');
});

Tinytest.add('handles arrays that include falsy and true values', function (test) {
  test.equal(classNames(['a', 0, null, undefined, false, true, 'b']), 'a b');
});

Tinytest.add('handles arrays that include arrays', function (test) {
  test.equal(classNames(['a', ['b', 'c']]), 'a b c');
});

Tinytest.add('handles arrays that include objects', function (test) {
  test.equal(classNames(['a', {b: true, c: false}]), 'a b');
});

Tinytest.add('handles deep array recursion', function (test) {
  test.equal(classNames(['a', ['b', ['c', {d: true}]]]), 'a b c d');
});