function range(start, end, step = 1) {
  let current = start;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (current < end) {
        const value = current;
        current += step;
        return { value: value, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

module.exports = range;
