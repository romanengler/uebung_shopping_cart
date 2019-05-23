$(document).ready(function() {

  var popup = $(".popup");
  var mySelectedItems = $(".grid-item_select");
  console.log(mySelectedItems);

  mySelectedItems.click(function() {
    console.log("click");

$(".popup").toggleClass("is-shown")

    // function showPopup() {
    //   popup.addClass(".is-shown");
    // }

  });


});
