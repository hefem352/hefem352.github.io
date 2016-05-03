var text = ['Helvetica', 'Times New Roman', 'Georgia', 'Comic Sans'];
var class_name = ['helvetica', 'times', 'georgia', 'comic']; 
var random_number = Math.floor(Math.random() * text.length);
var colors  = ['red', 'blue', 'yellow'];

$('.button').click(function() {
  var random_number = Math.floor(Math.random() * text.length),
      random_color_number  = Math.floor(Math.random() * colors.length),
      text_to_use          = text[random_number],
      class_to_use         = class_name[random_number]
      result               = '<span class="' + class_to_use + '">' + text_to_use + '</span>';

    
  $('.content').prepend(result);
});


  /*
      example = '<span class="' + class_to_use + '">' + text_to_use + '</span>';
      example = 'string' + 'another string' + variable + 'another string'
    */
			