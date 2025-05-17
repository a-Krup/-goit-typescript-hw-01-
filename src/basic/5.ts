enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  const dayName = DayOfWeek[day];

  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    console.log(`${dayName} — це вихідний день.`);
    return true;
  } else {
    console.log(`${dayName} — це робочий день.`);
    return false;
  }
};

isWeekend(DayOfWeek.Monday);
isWeekend(DayOfWeek.Sunday);
