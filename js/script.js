


const btn = document.getElementById('btn');
btn.addEventListener("click", doArithmetic);


function doArithmetic() {
 
    const amount = document.getElementById("amount");
    const interest = document.getElementById("apr");
    const years = document.getElementById("months");
    const monthlyPayment = document.getElementById("showMonth");
    const totalPayment = document.getElementById("showTotal");
    const totalInterest = document.getElementById("showApr");
   
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) ;
   
    // Computed Monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
   
    if (isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    }else{
        return;
    }
}
