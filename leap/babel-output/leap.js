"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var divBy = function divBy(year, num) {
  return year % num === 0;
};

var isLeapYear = function isLeapYear(year) {
  return divBy(year, 4) && (!divBy(year, 100) || divBy(year, 400));
};

exports["default"] = isLeapYear;
module.exports = exports["default"];