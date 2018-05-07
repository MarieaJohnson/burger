// console.log("sanity");
var newBurger

$(".submit").on("click", function (event) {
  event.preventDefault();
  // enter_text jquery string #enter_text.val()

  $.post("/api/", newBurger,
    function (data) {
      // posting data to an endpoint
    });
});