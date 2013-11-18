$(function(){
	
	var note = $('#note'),
		ts = new Date(2013, 10, 22, 21),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the party starts!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});

$("#button1").click(function() {
	$("#tab2").hide();
	$("#tab1").show();
});
$("#button2").click(function() {
	$("#tab1").hide();
	$("#tab2").show();
});

if (window.location.hash==="#Q&A"){
	$("#tab1").hide();
	$("#tab2").show();
}
