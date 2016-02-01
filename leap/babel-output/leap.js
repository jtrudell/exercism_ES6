"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLeapYear = function isLeapYear(year) {
  if (year % 4 === 0) return year % 100 !== 0 || year % 400 === 0;
  return false;
};

exports["default"] = isLeapYear;
module.exports = exports["default"];