
$(document).ready(function(){
  $('.slide').animate(
    {top: 0},
    1000,
    'easeInOutBack'
  );
});

$('body .slider').cycle({fx:'scrollLeft'});

$('.left').click(function(){
  $('#slide-show').cycle('prev');
});

$('.right').click(function(){
  $('#slide-show').cycle('next');
});
