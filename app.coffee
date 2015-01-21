
$(document).on 'click','.scroll-list li',()->
  $(this).parent().find('li').removeClass('active')
  $(this).addClass('active')

$(document).on 'click','#btn-move-left',()->
  if $('#right-list li.active').length == 0
    return
  $('#left-list').prepend $('#right-list li.active')
