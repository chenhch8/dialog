$(document).ready(function() {
  var dialog = $('#background');

  $('button').on('click', function(event) {
    dialog.removeClass('hide')
      .addClass('show-0');
    return false;
  });

  $('.primary').on('click', function(event) {
    // add what you want to do here
    return false;
  });

  $('.default').on('click', function(event) {
    dialog.removeClass('show-0')
      .addClass('show-1')
    setTimeout(function() {
      dialog.removeClass('show-1')
        .addClass('hide');
    }, 505);
    return false;
  })
});