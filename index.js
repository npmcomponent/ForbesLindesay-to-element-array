var toArray = require('to-array');

module.exports = toElementArray;
function toElementArray(elements) {
  if (typeof elements === 'string') {
    return toArray(document.querySelectorAll(elements));
  } else {
    return toArray(elements);
  }
}