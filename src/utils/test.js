/**
 *
 * @description Function that takes a Enzyme wrapper and search for an element by its data-test attribute
 * @param {*} wrapper
 * @description Enzyme React element
 * @param {string} value
 * @description value of the data-test attribute
 */
export const findByTestAtrr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);
