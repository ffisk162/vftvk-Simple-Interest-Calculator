// compute does the work of calculation and error checking
function compute()
{
// retrieve the values for the calc.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
// figure out the interest, it is not p&i, it is just i
    var interest = principal * years * rate / 100;
// figure out the future date by today year plus selected years
	var futureDate = new Date().getFullYear() + Number(years);
// principal must be greater than zero, defined constraint
    if (principal == 0 || principal < 0 ) {
		alert("The principal amount must be a number greater than zero");
	} else {
// insert results with text right after the compute interest button (named "result")
        resultDiv = document.getElementById("result");
// the first innerHTML is a "=" sign, this will remove the prior run if there was one
        resultDiv.innerHTML = "<br/><br/>If you deposit <mark>" + principal.toString() + "</mark>,";
        resultDiv.innerHTML += "<br/>at an interest rate of <mark>" + rate.toString() + "</mark>.";
        resultDiv.innerHTML += "<br/>You will receive an amount of <mark>" + interest.toString() + "</mark>,";
        resultDiv.innerHTML += "<br/>in the year <mark>" + futureDate.toString() + "</mark>";
	}
// No matter if error with alert or good calc, focus the cursor onto the principal input field
	document.getElementById("principal").focus();
}
// move slider amount to the right of the slider
function updateSlider(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmount");
    sliderDiv.innerHTML = slideAmount;
    }       