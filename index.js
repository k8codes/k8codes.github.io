$(document).ready(function() {
  const img1 = '<a href="https://k8codes.github.io/simonsays"><img src="simon-says.jpeg" alt="simon says game" id="main-photo"/></a>';
  const img2 = '<a href="https://k8codes.github.io/quote-generator"><img src="quote-generator.jpeg" alt="quote generator" id="main-photo"/></a>';
  const img3 = '<a href="https://k8codes.github.io/tic-tac-toe"><img src="tic-tac-toe.jpeg" alt="tic tac toe game" id="main-photo"/></a>';
  const img4 = '<a href="https://k8codes.github.io/calculator"><img src="calculator.jpeg" alt="calculator" id="main-photo"/></a>';
  const img5 = '<a href="https://k8codes.github.io/pomodoro-clock"><img src="pomodoro.jpeg" alt="pomodoro clock" id="main-photo"/></a>';

//array of thumbnail pics
  const thumbs = [img1, img2, img3, img4, img5];
  let current, start, resumed;

  let i = 1;

  function timed() {
    if (resumed == true) {
      i = current + 1;
      console.log(i);
    } else if (resumed == false) {
      i = 1;
    }
    start = setInterval(() => {changeItUp()}, 3000);

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

  function stopPlay() {
    clearInterval(start);
    $('#resume-play').removeClass('hide');
  }
//calls timed function
  timed();
//function to display image
display = (pic) => $('#photo').html(pic);

//when first thumbnail is clicked
  $('#one').click(function() {
    current = 0;
    display(img1);
    stopPlay();
  })
//when second thumbnail is clicked
  $('#two').click(function() {
    current = 1;
    display(img2);
    stopPlay();
  })

  $('#three').click(function() {
    current = 2;
    console.log(current);
    display(img3);
    stopPlay();
  })

  $('#four').click(function() {
    current = 3;
    display(img4);
    stopPlay();
  })

  $('#five').click(function() {
    current = 4;
    display(img5);
    stopPlay();
  })

  $('#resume-play').click(function() {
    resumed = true;
    $(this).addClass('hide');
    timed();
  })
})
