function palindrome(date) {
  const { day, month, year } = getDayMonthYear(date);
  const {
    reversedOne,
    reversedTwo,
    reversedThree,
    formatOne,
    formatTwo,
    formatThree,
  } = formatDateAndReverse(day, month, year);
  if (
    reversedOne === formatOne ||
    reversedTwo === formatTwo ||
    reversedThree === formatThree
  ) {
    return true;
  } else {
    return false;
  }
}

function getDayMonthYear(date) {
  return {
    day: date.slice(0, 2),
    month: date.slice(3, 5),
    year: date.slice(6),
  };
}
function formatDateAndReverse(day, month, year) {
  const formatOne = month + day + year;
  const formatTwo = day + month + year;
  const formatThree = day + month + year.slice(2);
  const reversedOne = formatOne.split("").reverse().join("");
  const reversedTwo = formatTwo.split("").reverse().join("");
  const reversedThree = formatThree.split("").reverse().join("");
  return {
    reversedOne,
    reversedTwo,
    reversedThree,
    formatOne,
    formatTwo,
    formatThree,
  };
}

console.log(palindrome("01-02-2020"));
