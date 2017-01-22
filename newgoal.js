var array = [];
var quotes = [];
var daysWeek = [];

function newGoalSubmit() {
  var goalName = document.getElementById("goaltext").value;
  var numDaysSelected = document.querySelectorAll('input[type="checkbox"]:checked').length;
  var whichDaysSelected = document.querySelector('.week:checked').value;
  console.log(whichDaysSelected);

  if (localStorage.getItem("array") != null) {
    array = JSON.parse(localStorage.getItem("array"));
  }

  if (localStorage.getItem("daysWeek") != null) {
    daysWeek = JSON.parse(localStorage.getItem("daysWeek"));
  }

  var dict = {};
  dict["name"] = goalName;
  dict["count"] = numDaysSelected;
  array.push(dict);
  localStorage.setItem("array", JSON.stringify(array));

  daysWeek.push(whichDaysSelected);
  localStorage.setItem("daysWeek", JSON.stringify(daysWeek));
}

//ONLOAD WINDOW

function showText() {
    array = JSON.parse(localStorage.getItem("array"));
    daysWeek = JSON.parse(localStorage.getItem("daysWeek"));
    var node = document.getElementById("results");
    for (var i = 0; i < array.length; i++) {
      var new_goal = document.createElement("li");
      var textNode = document.createTextNode(array[i].name);
      var newDay = document.createElement("li");
      var displayDays = document.createTextNode(daysWeek[i]);
      var btn = document.createElement("input");
      btn.type = "checkbox";
      btn.id = "checkbutton";
      btn.name = array[i].name;
      var textButton = document.createTextNode("COMPLETED");
      new_goal.appendChild(textNode);
      node.appendChild(new_goal);
      node.appendChild(btn);
    }
}

function quoteSubmit() {
  var quoteText = document.getElementById("quotetext").value;
  if (localStorage.getItem("quotes") != null) {
    quotes = JSON.parse(localStorage.getItem("quotes"));
  }
  quotes.push(quoteText);
  localStorage.setItem("quotes", JSON.stringify(quotes));
  alert("Your quote has been recorded!")
}

function validate() {
  quotes = JSON.parse(localStorage.getItem("quotes"));
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  if (document.getElementById('checkbutton').checked) {
      alert(rand);
  }
}
// source: http://stackoverflow.com/questions/9887360/check-if-checkbox-is-checked-javascript
