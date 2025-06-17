function minDate(dates) {
  return dates.reduce((min, date) => (date < min ? date : min), dates[0]);
}

// Do not change the code
var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03"
];
console.log(minDate(dates)); // Prints the earliest date
