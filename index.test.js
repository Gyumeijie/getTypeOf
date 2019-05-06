import getTypeOf from './';

describe('get the type of built-in types', () => {
  test('built-in types', () => {
    expect(getTypeOf(undefined)).toBe('undefined');
    expect(getTypeOf(null)).toBe('null');
    expect(getTypeOf(1)).toBe('number');
    expect(getTypeOf('this is a string')).toBe('string');
    expect(getTypeOf(true)).toBe('boolean');
    expect(getTypeOf(Symbol())).toBe('symbol');
    expect(getTypeOf({})).toBe('object');
    expect(getTypeOf([1, 2, 3])).toBe('array');
    expect(getTypeOf(() => {})).toBe('function');
    expect(getTypeOf(Object.create(null))).toBe('object');
    expect(getTypeOf(Object.create(null), true)).toBe('object');
    expect(getTypeOf(new Date())).toBe('date');
    expect(getTypeOf(/regexp/)).toBe('regexp');
  });
});

describe('get the type of the customized types', () => {
  test('customized types', () => {
    class Custom {
      constructor() {
        this.name = 'custom';
      }
    }
    expect(getTypeOf(new Custom())).toBe('object');
    expect(getTypeOf(new Custom(), true)).toBe('custom');

    function Foo() {
      this.name = 'foo';
    }
    expect(getTypeOf(new Foo())).toBe('object');
    expect(getTypeOf(new Foo(), true)).toBe('foo');
  });
});
