(function()  {
// add event
var openFromButton = document.querySelector('.arrow-down');



if (openFromButton) {
  openFromButton.addEventListener('click', function(e) {
    e.preventDefault();
    form.open();
  })
}



}());