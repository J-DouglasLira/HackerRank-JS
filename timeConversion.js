function timeConversion(s) {
  const hour = s.startsWith('12');
  const hoursIncrement = s.slice(0, 2);
  const minutesSeconds = s.substr(2).replace(s.substr(8), "");
  if (s.endsWith('PM')) {
    if (hour) {
      return s.replace('PM', "")
    } else {
      return +'12' + +hoursIncrement + minutesSeconds
    }
  } else {
    if (hour) {
      return "00" + minutesSeconds
    }
    return s.replace('AM', "")
  }

}

const s = '10:05:45PM'

timeConversion(s);
