$('.main-carousel').flickity()

$('#detail-btn').click(() => {
  $('#modal').addClass('is-active')
})

$('#delete').click(() => {
  $('#modal').removeClass('is-active')
})