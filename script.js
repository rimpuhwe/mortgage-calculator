const mortgageAmount = document.getElementById('mortgage-amount');
const mortgageTerm = document.getElementById('mortgage-term');
const interestRate = document.getElementById('interest-rate');
const calculateBtn = document.getElementById('calculate-btn');
const resultBox = document.getElementById('box-result')
const AmountContainer = document.getElementById('amount-container');
const termContainer = document.getElementById('term-container');
const rateContainer = document.getElementById('rate-container');


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
function calculate(r, p, n) {
    const monthlyRepayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyRepayment * n;

    resultBox.innerHTML = `
    <h3>Your Result</h3>
    <p>Your results are shown below based on the information you provided.
     To adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div id ="result-container">
        <p>Your monthly repayments <span>£${monthlyRepayment.toFixed(2)}</span></p>
        <hr>
        <p>Total you'll repay over the term <span class="white">£${totalPayment.toFixed(2)}</span></p>
    </div>
    `;

}

calculateBtn.addEventListener('click', () => {
    if(mortgageTerm.value === ''){
        mortgageTerm.style.border = '2px solid red';
        termContainer.innerHTML += `<p class="error">enter atleast 1year</p>`;
        
    }
    if(mortgageAmount.value === ''){
        mortgageAmount.style.border = '2px solid red';
        AmountContainer.innerHTML += `<p class="error">This field is empty</p>`;
          
    }
    if(interestRate.value === ''){
        interestRate.style.border = '2px solid red';
        rateContainer.innerHTML += `<p class="error">The interest rate is required</p>`;
           
    }

    else {
        const rate = (interestRate.value / 100) / 12;
        const amount = mortgageAmount.value;
        const term = mortgageTerm.value * 12;

        calculate(rate, amount, term);
    }


})

/*starting working with the logic
function addCalculation(r) {
    if (r === '') {
        mortgageAmount.style.border = '1.5px solid red';
        currencyContainer.innerHTML += `<p class="error">This field is empty</p>`

    }

}

calculateBtn.addEventListener('click', () => {
    const r = parseInt(interestRate.value);
    addCalculation(r);
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
}) */






