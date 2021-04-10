function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
	var futureDate = new Date().getFullYear() + Number(years);
	
    if (principal == 0 || principal < 0 ) {
		alert("The principal amount must be a number greater than zero");
	} else {
        resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "<br/><br/>If you deposit <mark>" + principal.toString() + "</mark>,";
        resultDiv.innerHTML += "<br/>at an interest rate of <mark>" + rate.toString() + "</mark>.";
        resultDiv.innerHTML += "<br/>You will receive an amount of <mark>" + interest.toString() + "</mark>,";
        resultDiv.innerHTML += "<br/>in the year <mark>" + futureDate.toString() + "</mark>";
	}
	document.getElementById("principal").focus();
}
function updateSlider(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmount");
    sliderDiv.innerHTML = slideAmount;
    }       