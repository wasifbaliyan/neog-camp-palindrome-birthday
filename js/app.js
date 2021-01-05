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
  const isPalindrome = palindrome(date);
  let text = "";
  if (isPalindrome) {
    text = "YAYYY! Your birthday is a palindrome. ";
  } else {
    text = "Nayy! Your birthday is not a palindrome. ";
  }
  result.innerHTML = "<h3>" + text + "</h3>";
  setTimeout(() => {
    loading.style.display = "none";
    result.style.display = "block";
  }, 3000);
});

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
