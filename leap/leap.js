let divBy = (year, num) => {
  return year % num === 0; 
};

let isLeapYear = (year) => {
  return divBy(year, 4) && (!divBy(year, 100) || divBy(year, 400));
};

export default isLeapYear;
