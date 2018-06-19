let math_checked = true;
let ss_checked = true;
let s_checked = true;
let la_checked = true;
let st_checked = true;
//Checks to see if checkbox is checked or not
function checkboxSubject(event, subject) {

  if (event.checked) {
    reAdd_subject(subject);
    clearTables();
    filltruncTable();
    fillFilteredTable();
  } else {
    if (subject == "math") {
      math_checked = false;
    }
    if (subject == "Social Studies") {
      ss_checked = false;
    }
    if (subject == "Science") {
      s_checked = false;
    }
    if (subject == "Language Arts") {
      la_checked = false;
    }
    if (subject == "Spanish Tasks") {
      st_checked = false;
    }
    assignmentArray = assignmentArray.filter(removeBySubject, {
      subject: subject
    });

    clearTables();
    filltruncTable();
    fillFilteredTable();
  }
}
//Array interface
function removeBySubject(value, index, arr) {
  if (this.subject == value.subject) {
    truncateArray.push(value);
  }
  return this.subject != value.subject;
}

function reAdd_subject(subject) {
  for (i = 0; i < truncateArray.length; i++) {
    if (subject == truncateArray[i].subject) {
      assignmentArray.push(truncateArray[i]);
    }
  }
  truncateArray = truncateArray.filter(removeTruncateSubject, {
    subject: subject
  });
}

function removeTruncateSubject(value, index, arr) {
  return this.subject != value.subject
}
