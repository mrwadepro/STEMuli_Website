//Array that will store all assignments posted
let assignmentArray = [];
let truncateArray = [];
window.onload = function() {
  $.getJSON("/JSON/Assignments.json", function(json) {
  for(i=0;i<json.Assignments.length;i++){
    assignmentArray.push(json.Assignments[i]);
    Card(json.Assignments[i]);
  }
  row=0;
  card_num=0;
      });
}
