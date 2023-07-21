export const capitalize = (word: string): string => {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};

export const add = (a: number, b: number): number => a + b;

export const substract = (a: number, b: number): number => a - b;

export const multiply = (a: number, b: number): number => {
  return a * b;
};
