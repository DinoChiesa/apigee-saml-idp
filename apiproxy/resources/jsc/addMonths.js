// date-helper.js
// ------------------------------------------------------------------
//
// Description goes here....
//
// created: Tue Sep 29 22:40:37 2015
// last saved: <2015-September-29 22:46:08>



function _isLeapYear (year) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

function _daysInMonth (year, month) {
    return [31, (_isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function addMonths (d, value) {
  var n = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + value);
  var m = d.getMonth();
  var y = d.getFullYear();
  d.setDate(Math.min(n, _daysInMonth(y, m)));
  return d;
}
