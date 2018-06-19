function buildCard(assignment_obj,card_num,row) {
  console.log(assignment_obj);
  document.getElementById("c" + card_num + "r" + row + "_title").innerHTML = assignment_obj.Title;
  document.getElementById("c" + card_num + "r" + row + "_descr").innerHTML = assignment_obj.Description;
  $("#c" + card_num + "r" + row + "_img").attr('src', assignment_obj.img);
}
