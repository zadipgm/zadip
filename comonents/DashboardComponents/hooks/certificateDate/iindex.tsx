const addOneYear = (date) => {
  date.setFullYear(date.getFullYear() + 1);
  return date;
};

// April 20, 2022
const date = new Date();

const newDate = addOneYear(date);

// April 20, 2023
let myDate = new Date(newDate); // today's date

export const englishDate = myDate.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});
export const arabicDate = myDate.toLocaleDateString("ar-SA-islamic", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});
