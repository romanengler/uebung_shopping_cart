$(document).ready(function() {

  var $popup = $(".popup");
  var $mySelectedItems = $(".grid-item_select");
  console.log($mySelectedItems);

  $mySelectedItems.click(function() {
    console.log("click");

    $(".popup").toggleClass("is-shown")
  });


var deleteButton = $(".popup_article_delete")
deleteButton.click(function(event) {
    console.log("click");
    var $target = $(event.target);
    var $parentOfClickedButton = $target.closest(".popup_article");

    console.log($parentOfClickedButton);

    $parentOfClickedButton.hide();
  });


});
