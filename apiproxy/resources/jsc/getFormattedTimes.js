
function formattedTime(dt) {
  var yr = dt.getUTCFullYear();
  var day = '00' + dt.getUTCDate();
  var mnth = '00' + (dt.getUTCMonth() + 1);
  var hr = '00' + dt.getUTCHours();
  var mn = '00' + dt.getUTCMinutes();
  var sec = '00' + dt.getUTCSeconds();
  var msec = '000' + dt.getUTCMilliseconds();
  var time = yr + '-' + mnth.slice(-2) + '-' + day.slice(-2) + 'T' + hr.slice(-2) + ':' + mn.slice(-2) + ':' + sec.slice(-2) + '.' + msec.slice(-3) + 'Z';
  return time;
}

var d1 = new Date();
context.setVariable("myTime", formattedTime(d1));
context.setVariable("target.copy.pathsuffix", "false");

// ~6 months from now, uses addMonths.js
var d2 = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate());
d2 = addMonths(d2, 6); // uses heuristic for shorter months and even leap years
context.setVariable("myTime_6mos_hence", formattedTime(d2));

// 1 day in the future; Javascript does the right thing with rollovers.
d1.setDate(d1.getDate() + 1);
context.setVariable("myTime_1day_hence", formattedTime(d1));
