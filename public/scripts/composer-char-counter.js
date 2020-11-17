$(document).ready(function() {
  $('.container output').text(140);
  $('#tweet-text').on('input', function(){
    let chars = 140
    const inputLength = this.value.length
    $('.container output').text(chars - inputLength);
  })
  
});
