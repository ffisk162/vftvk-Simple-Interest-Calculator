function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
	years = document.getElementById("years").value;
    interest = principal * years * rate / 100;
	d = new Date().getFullYear() + Number(years);
	
	resultDiv = document.getElementById("result");
	resultDiv.innerHTML += "<br/>If you deposit " + principal.toString() + ",";
	resultDiv.innerHTML += "<br/>at an interest rate of " + rate.toString() + ".";
	resultDiv.innerHTML += "<br/>You will receive an amount of " + interest.toString() + ",";
	resultDiv.innerHTML += "<br/>in the year " + d.toString();


}

function updateSlider(slideAmount) {
    sliderDiv = document.getElementById("sliderAmount");
    sliderDiv.innerHTML = slideAmount;
    }       