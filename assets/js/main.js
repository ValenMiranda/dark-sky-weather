$(document).ready(function() {
	$(".button-collapse").sideNav();

	$.ajax({
		url: 'https://api.darksky.net/forecast/5e1d5d3ac96236d1def643c77354f224/33.4724728,-70.9100195',
		type: 'GET',
		dataType: 'jsonp',
	})
	.done(function(data) {
		console.log(data);

		var tempAct = data.currently.apparentTemperature;

		var minUno = data.daily.data[1].temperatureMin;
		var minDos = data.daily.data[2].temperatureMin;
		var minTres = data.daily.data[3].temperatureMin;
		var minCuatro = data.daily.data[4].temperatureMin;
		var minCinco = data.daily.data[5].temperatureMin;

		var maxUno = data.daily.data[1].temperatureMax;
		var maxDos = data.daily.data[2].temperatureMax;
		var maxTres = data.daily.data[3].temperatureMax;
		var maxCuatro = data.daily.data[4].temperatureMax;
		var maxCinco = data.daily.data[5].temperatureMax;

			$('#current').append(farToCell(tempAct));

			$('#temp-uno').append('<p>' + farToCell(mindiasig) + " ~ " + farToCell(maxdiasig)+'</p>');
			$('#temp-dos').append('<p>' + farToCell(mindia2) + " ~ " + farToCell(maxdia2)+'</p>');
			$('#temp-tres').append('<p>' + farToCell(mindia3) + " ~ " + farToCell(maxdia3)+'</p>');
			$('#temp-cuatro').append('<p>' + farToCell(mindia4) + " ~ " + farToCell(maxdia4)+'</p>'); 
			$('#temp-cinco').append('<p>' + farToCell(mindia5) + " ~ " + farToCell(maxdia5)+'</p>');
	})

	.fail(function() {
		console.log("error");
	})
	
	
});