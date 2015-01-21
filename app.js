(function() {

  $(document).on('click', '.scroll-list li', function() {
    $(this).parent().find('li').removeClass('active');
    return $(this).addClass('active');
  });

  $(document).on('click', '#btn-move-left', function() {
    if ($('#right-list li.active').length === 0) return;
    return $('#left-list').prepend($('#right-list li.active'));
  });

}).call(this);
