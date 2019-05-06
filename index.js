'use strict';

const getTypeOf = (obj, detail = false, typeCase = 'lower') => {
  let typeString = Object.prototype.toString.call(obj);

  // The typeString => [object xxx], the real type start position is 8
  typeString = typeString.slice(8, -1);
  if (detail) {
    try {
      // If obj is created by `Object.create(null)`, `TypeError` will be thrown
      typeString = obj.constructor.name;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  return typeCase === 'lower' ? typeString.toLowerCase() : typeString;
};

module.exports = getTypeOf;
