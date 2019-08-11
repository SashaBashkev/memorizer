// UI variables
let words = document.querySelector(".wordsNumber"),
  playBtn = document.querySelector(".play"),
  output = document.querySelector(".output"),
  checkInput = document.querySelector(".checkInput"),
  hint = document.querySelector(".hint"),
  checkBtn = document.querySelector(".checkBtn");
// Default list
let list = [
  "mother",
  "family",
  "coffee",
  "cake",
  "dogs",
  "friends",
  "nature",
  "javascript",
  "love",
  "morning",
  "pizza",
  "avocado",
  "transister",
  "islands",
  "squirrel"
];
// Temporary list
let tempList = [];
document.querySelector(".max").innerText = list.length;
// Suffle temporary list
function shuffle(array) {
  let j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}
// Game init
function startGame() {
  let wordsNumber = words.value;
  if (wordsNumber >= 1 && wordsNumber <= list.length) {
    displayList(shuffle(list), parseInt(wordsNumber - 1));
    words.value = "";
  } else {
    alert(`Words amount should be between 1 and ${list.length}`);
    words.value = "";
    words.focus();
    return;
  }
}
function displayList(list, numbers) {
  document.querySelector(".form").style.display = "none";
  for (let i = numbers; i !== -1; i--) {
    tempList.push(list[i]);
  }
  output.innerHTML = tempList.map(word => `<li>${word}</li>`).join("");
  setTimeout(() => (output.innerHTML = ""), 3000);
}
function checkValue() {
  let val = checkInput.value.toLowerCase();
  if (val == "") {
    alert("Type word from list");
    return;
  }
  for (let i = 0; i <= tempList.length; i++) {
    if (tempList.includes(val)) {
      output.innerHTML += `<li>${val}</li>`;
      tempList.splice(tempList.indexOf(val), 1);
      checkInput.value = "";
      checkInput.focus();
      return tempList.length == 0
        ? notify("Congrats! All words matched!", true)
        : "";
    } else {
      checkInput.value = "";
      notify("NO word matched! Try again!", false);
      return;
    }
  }
}

function notify(msg, win) {
  alert(msg);
  if (win) {
    document.querySelector(".form").style.display = "block";
    output.innerHTML = "";
  } else {
    return;
  }
}

// Listen for events
playBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkValue);
hint.addEventListener("click", () => {
  alert(tempList);
  checkInput.focus();
});
