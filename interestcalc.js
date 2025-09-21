function calculateInterest() {
 // Get user inputs
  let principle = parseFloat(document.getElementById("principle").value);
  let rate = parseFloat(document.getElementById("rate").value) / 100;
  let time = parseFloat(document.getElementById("time").value);

// Validate inputs
  if (isNaN(principle) || isNaN(rate) || isNaN(time)) {
    document.getElementById("results").innerHTML = "⚠️ Please enter valid numbers.";
    return;
  }

  // Calculate total and interest
  let total = principle * (1 + rate * time);
  let interest = total - principle;

 // Display results
  document.getElementById("results").innerHTML =
    `With a beginning principal of $${principle.toFixed(2)} 
    and a growth rate of ${(rate*100).toFixed(2)}% for ${time} years, 
    your total interest will be $${interest.toFixed(2)} 
    with a grand total of $${total.toFixed(2)}.`;
}
