function setup() {
  // put setup code here
  
   
    
}

function draw() {
  // put drawing code here
}

$('.chat-input input').keyup(function(e) {
	if ($(this).val() == '')
		$(this).removeAttr('good');
	else
		$(this).attr('good', '');
});