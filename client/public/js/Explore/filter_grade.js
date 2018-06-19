//Checks to see if checkbox is checked or not
let fresh_checked = true;
let soph_checked = true;
let jr_checked = true;
let sen_checked = true;

function checkboxGrade(event, Grade) {
  if (event.checked) {
    add_grade(grade);
  } else {
    if (Grade == "Freshman") {
      fresh_checked = false;
    }
    if (Grade == "Sophmore") {
      soph_checked = false;
    }
    if (Grade == "Junior") {
      jr_checked = false;
    }
    if (Grade == "Senior") {
      sr_checked = false;
    }
    assignmentArray = assignmentArray.filter(removeByGrade, {
      Grade: Grade
    });
    for(i=0;i<assignmentArray.length;i++){
    Card(assignmentArray[i]);
    for(remove=7-(assignmentArray.length-truncateArray.length);remove<=8;remove++){
      document.getElementById("c"+remove+"_shown").style.visibility = "hidden";
    }
  }
  }
//console.log("Filtered"+assignmentArray);
//console.log("Truncated:"+truncateArray);
}

function removeByGrade(value, index, arr) {

  if (typeof value.Grade[1] != "undefined") {
    inner_index = 1;
    if (value.Grade[inner_index] == "Sophmore") {
      if (soph_checked == true) {
        return;
      }
      if (typeof value.Grade[inner_index] == "undefined") {
        return;
      }
    }
    if (value.Grade[inner_index] == "Junior") {
      if (jr_checked == true) {
        return;
      }
    }
    if (value.Grade[inner_index] == "Senior") {
      if (sr_checked == true) {
        return;
      }
    }
  }
  if (this.Grade == value.Grade[0]) {
    truncateArray.push(value);
  }
  if (typeof value.Grade[1] != "undefined") {
    inner_index = 1;
    for (i = 0; i < value.Grade.length; i++) {
      if (this.Grade == value.Grade[inner_index]) {
        truncateArray.push(value);
      }
    }
  }
  return this.Grade != value.Grade;
}

function add_grade(Grade) {
  for (i = 0; i < truncateArray.length; i++) {
    if (Grade == truncateArray[i].Grade) {
      assignmentArray.push(truncateArray[i]);
    }
  }
  truncateArray = truncateArray.filter(removeTruncateGrade, {
    Grade: Grade
  });
}
let card_num = 0;
let row = 0;

function Card(assignment) {
  if (row % 4 == 0 && row != 0) {

    card_num = 0;
  }
  if (card_num == 4) {
    row++;
    card_num = 0;
  }
buildCard(assignment,card_num,row)
  card_num++;
}

function removeTruncateGrade(value, index, arr) {
  return this.grade != value.grade
}
