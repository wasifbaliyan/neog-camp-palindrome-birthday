let btn = document.querySelector(".palindrome-btn");
let loading = document.querySelector(".loading");
let result = document.querySelector(".result");
let form = document.querySelector(".form");
let input = document.querySelector("#birthday");
loading.style.display = "none";
result.style.display = "none";

btn.addEventListener("click", () => {
  result.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loading.style.display = "block";
  const date = input.value;
  const { day, month, year } = getDayMonthYear(date);
  const allDateFormats = getAllDateFormats(day, month, year);
  const palindromes = checkAllPalindromes(allDateFormats);
  let text = palindromeCheckMessage(palindromes);

  result.innerHTML = "<h3>" + text + "</h3>";
  setTimeout(() => {
    loading.style.display = "none";
    result.style.display = "block";
  }, 3000);
});

function checkAllPalindromes(arr) {
  let isPalindrome = [];
  arr.forEach((item) => {
    if (palindrome(item)) {
      isPalindrome.push(true);
    } else {
      isPalindrome.push(false);
    }
  });
  return isPalindrome;
}

function palindrome(str) {
  if (str === str.split("").reverse().join("")) return true;
  return false;
}

function getDayMonthYear(date) {
  let formattedDate = new Date(date);
  let yearValue = String(formattedDate.getFullYear());
  let monthValue = String(formattedDate.getMonth() + 1);
  let dateValue = String(formattedDate.getDate());
  if (monthValue < 10) {
    monthValue = monthValue.padStart(2, "0");
  }
  if (dateValue < 10) {
    dateValue = dateValue.padStart(2, "0");
  }

  return {
    day: dateValue,
    month: monthValue,
    year: yearValue,
  };
}
function getAllDateFormats(day, month, year) {
  const formatOne = `${day}${month}${year}`;
  const formatTwo = `${month}${day}${year}`;
  const formatThree = `${year}${month}${day}`;
  const formatFour = `${day}${month}${year.slice(2)}`;
  const formatFive = `${month}${day}${year.slice(2)}`;
  const formatSix = `${year.slice(2)}${month}${day}`;
  return [formatOne, formatTwo, formatThree, formatFour, formatFive, formatSix];
}

function palindromeCheckMessage(arr) {
  if (arr.some((item) => item === true)) {
    return "YAYYY! Your birthday is a palindrome. ";
  }
  return "Nayy! Your birthday is not a palindrome. ";
}
