expect.extend({
  toBeWithinRange(actual, min, max) {
    if (typeof actual !== 'number') {
      throw new Error('Actual value must be a number');
    }

    const pass = actual >= min && actual <= max;

    return {
      pass,
      message: pass
        ? () => `expect ${actual} not to be within range (${min}...${max})`
        : () => `expect ${actual} to be within range (${min}...${max})`,
    };
  },
});
