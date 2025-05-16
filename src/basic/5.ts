type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === "Saturday" || day === "Sunday") {
    console.log(`${day} — це вихідний день.`);
    return true;
  } else {
    console.log(`${day} — це робочий день.`);
    return false;
  }
};

isWeekend("Monday");
isWeekend("Sunday");
