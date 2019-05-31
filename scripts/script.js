$(document).ready(function() {

  var $popup = $(".popup");
  var $mySelectedItems = $(".grid_item_select");
  console.log($mySelectedItems);

  $mySelectedItems.click(function() {
    console.log("click");

    $(".popup").toggleClass("is_shown")
    $(".grid_item_select").toggleClass("hover_backbround")
  });


  var $deleteButton = $(".popup_article_delete")
  $deleteButton.click(function(event) {
    console.log("click");
    var $target = $(event.target);
    var $parentOfClickedButton = $target.closest(".popup_article");

    console.log($parentOfClickedButton);

    $parentOfClickedButton.hide();
  });



  var $popup = $(".popup");
  var $mySelectedItems = $(".grid_item_select");
  console.log($mySelectedItems);

  $mySelectedItems.hover(function() {
    console.log("hover");

    $(".popup").toggleClass("is_shown-by-hover")
  });


  var deleteButton = $(".popup_article_delete")
  deleteButton.hover(function(event) {
    console.log("hover");
    var $target = $(event.target);
    var $parentOfClickedButton = $target.closest(".popup_article");

    console.log($parentOfClickedButton);
});




  $('.js-button').click(function(event) {
  $button = $(event.target);

  // change the buttons text
  $button.text('Added');

  // get data attribute to revel correct item in cart
  var itemName = $button.attr('data-item');
  console.log('itemName: ', itemName);

  // get the right item to reveal
  var $itemToReveal = $('#' + itemName);
  console.log('$itemToReveal: ', $itemToReveal);

  $itemToReveal.removeClass('is-hidden');

});

});
