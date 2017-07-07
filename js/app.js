$(document).ready(function() {

var $player1=[];
var $player2=[];
//set value of box
var $box1 = $('#box1').val('1');
var $box2 = $('#box2').val('2');
var $box3 = $('#box3').val('3');
var $box4 = $('#box4').val('4');
var $box5 = $('#box5').val('5');
var $box6 = $('#box6').val('6');
var $box7 = $('#box7').val('7');
var $box8 = $('#box8').val('8');
var $box9 = $('#box9').val('9');

 //winners array contain all winning posibility
var winners = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
  ];
//initial value to start
var t=1;
var a=0; //initial move counts

//when player click box, box value added to player array
 $('#box1').click(function(){
	if(t===1){
		$player1.push($box1.val());
	}else if(t===0){
		$player2.push($box1.val());
	}
});
  $('#box2').click(function(){
	if(t===1){
		$player1.push($box2.val());
	}else if(t===0){
		$player2.push($box2.val());
	}
});
 $('#box3').click(function(){
	if(t===1){
		$player1.push($box3.val());
	}else if(t===0){
		$player2.push($box3.val());
	}
});
  $('#box4').click(function(){
	if(t===1){
		$player1.push($box4.val());
	}else if(t===0){
		$player2.push($box4.val());
	}
});
   $('#box5').click(function(){
	if(t===1){
		$player1.push($box5.val());
	}else if(t===0){
		$player2.push($box5.val());
	}
});
    $('#box6').click(function(){
	if(t===1){
		$player1.push($box6.val());
	}else if(t===0){
		$player2.push($box6.val());
	}
});
     $('#box7').click(function(){
	if(t===1){
		$player1.push($box7.val());
	}else if(t===0){
		$player2.push($box7.val());
	}
});
      $('#box8').click(function(){
	if(t===1){
		$player1.push($box8.val());
	}else if(t===0){
		$player2.push($box8.val());
	}
});
      $('#box9').click(function(){
	if(t===1){
		$player1.push($box9.val());
	}else if(t===0){
		$player2.push($box9.val());
	}
});

//winner function check

function checkWinner(){
	for (var i=0 ;i<winners.length; i++)
		{
		if($player1.indexOf(winners[i][0]) > -1 
			&& $player1.indexOf(winners[i][1]) > -1 
			&& $player1.indexOf(winners[i][2]) > -1)
			{
			 console.log("player 1 won");
			 break;
			}
		else if($player2.indexOf(winners[i][0]) > -1 
			&& $player2.indexOf(winners[i][1]) > -1 
			&& $player2.indexOf(winners[i][2]) > -1)
			{
			console.log("player 2 won");
			break;
			}
		else if(a==9){
			console.log("Draw!");
			break;
			}
			// console.log($player1.indexOf(winners[i][0])); 
			// console.log($player1.indexOf(winners[i][1]));
			// console.log ($player1.indexOf(winners[i][2]));
		}};


	//everyclick switch

$('.square').click(function(){
	a++;
	if(t===1) //t value determine if the move from player 1 or 2
		{
		 $(this).addClass('x');
		 t=0;
		}
	else if(t===0)
		{
		 $(this).addClass('o');
		 t=1;
		}
		console.log($player1);
	
	checkWinner(); //function that determine which player is "the winner"
	

});

// function $checkWinner(){
// 	for (var i=0 ;i<winners.length; i++)
// 		{
// 		if($.inArray($player1,winners[i][0]) > -1 
// 			&& $.inArray($player1,winners[i][1]) > -1 
// 			&& $.inArray($player1,winners[i][2]) > -1)
// 			{
// 			 console.log("player 1 won");
// 			 break;
// 			}
// 		else if($.inArray($player2,winners[i][0]) > -1 
// 			&& $.inArray($player2,winners[i][1]) > -1 
// 			&& $.inArray($player2,winners[i][2]) > -1)
// 			{
// 			console.log("player 2 won");
// 			break;
// 			}
// 		else if(a==9){
// 			console.log("Draw!");
// 			break;
// 			}
// 			console.log($.inArray($player1,winners[i][0])); 
// 			console.log($.inArray($player1,winners[i][1]));
// 			console.log($.inArray($player1,winners[i][2]));
// 		}};

});