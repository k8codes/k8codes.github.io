$(document).ready(function() {
  const img1 = '<a href="https://k8codes.github.io/simonsays"><img src="simon-says.jpeg" alt="simon says game" id="main-photo"/></a>';
  const img2 = '<a href="https://k8codes.github.io/quote-generator"><img src="quote-generator.jpeg" alt="quote generator" id="main-photo"/></a>';
  const img3 = '<a href="https://k8codes.github.io/tic-tac-toe"><img src="tic-tac-toe.jpeg" alt="tic tac toe game" id="main-photo"/></a>';
  const img4 = '<a href="https://k8codes.github.io/calculator"><img src="calculator.jpeg" alt="calculator" id="main-photo"/></a>';
//array of thumbnail pics
  const thumbs = [img1, img2, img3, img4];
  let current;

  let i = 0;

  function timed() {
    let start = setInterval(() => {changeItUp()}, 3000);
    i = 1;
  }

  function changeItUp() {
    if (i < thumbs.length) {
      display(thumbs[i]);
      i++;
    } else if (i >= thumbs.length) {
      i = 0;
      display(thumbs[i]);
    }
  }
//calls timed function
  timed();
//function to display image
  display = (pic) => $('#photo').html(pic);
//when first thumbnail is clicked
  $('#one').click(function() {
    display(img1);
  })
//when second thumbnail is clicked
  $('#two').click(function() {
    display(img2);
  })
})
