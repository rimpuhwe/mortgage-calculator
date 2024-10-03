const mortgageAmount = document.getElementById('mortgage-amount');
const mortgageTerm = document.getElementById('mortgage-term');
const interestRate = document.getElementById('interest-rate');
const calculateBtn = document.getElementById('calculate-btn');
const resultBox = document.getElementById('box-result')
const currencyContainer = document.getElementById('currency-container')
mortgageAmount.addEventListener('input', function (e) {
    if (e.target.value < 0) {
        e.target.value = 0
    }
});
mortgageTerm.addEventListener('input', function (e) {
    if (e.target.value < 0) {
        e.target.value = '';
    }
});
interestRate.addEventListener('input', function (e) {
    if (e.target.value < 0) {
        e.target.value = 0
    }
});
calculateBtn.addEventListener('click' , ()=>{
    mortgageAmount.style.border = '1.5px solid red';
    currencyContainer.innerHTML += `<p class="error">This field is empty</p>`
    resultBox.innerHTML = `
    <h3>Your Result</h3>
    <p>Your results are shown below based on the information you provided.
     To adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div id ="result-container">
        <p>Your monthly repayments <span>£${mortgageTerm.value}</span></p>
        <hr>
        <p>Total you'll repay over the term <span class="white">£${mortgageAmount.value}</span></p>
    </div>
    `;
})





