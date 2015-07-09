$('document').ready(function(){

// 10 seconds left countdown
// question = random operation = random number + random number
// when answer = question --> 1 second added and new random question
// but countdown continue
// countdown = 0 --> answer input replaced by game over text
	
	//random question
	
	var randQuestion = function() {
		var randNumber1 = Math.floor(Math.random()*100);
		var randNumber2 = Math.floor(Math.random()*100);
		return randNumber1 + " + " + randNumber2
	};

	$('#question').text(randQuestion());


	//check answer

	var checkAnswer = function() {
	 	console.log('check answer');
	 	
	 	var correctAnswer = eval($('#question').text());
	 	var inputAnswer = Number($('#answer').val());


	 	if (correctAnswer === inputAnswer) {
	 		console.log('success');
	 		$('#question').text(randQuestion());
	 		console.log('question changed');
	 	};
	 };

	// check question + generate random question
	
	$(document).on('keyup', '#answer', function(){
		console.log('key up');
		checkAnswer();

	});



});
