# mortgage-calculator

i'm going to build a functional app which will be calculating the repayment amount with interest or the interest on mortage to be paid  only .

the bank can use tis app to calcutate the loan their users owe them and also the loaner can use it in help to calculate such amount they owe others .

here are some key values :

 1.Mortgage Amount (P): The total loan amount.
 2.Interest Rate (r): The annual interest rate, divided by 12 for monthly payments.
 3.Mortgage Term (n): The number of months (years × 12).

 the approach i'll be using :  M = (P * r(1+r)^n)/(1+r)n-1

 where, 
  M = Monthly repayment amount

  P = Loan principal (total mortgage amount)

  r = Monthly interest rate (annual interest rate / 12)

  n = Total number of payments (loan term in years × 12)


let's break this formula into steps to be more understandable :
 1. Convert the annual interest rate to the monthly interest rate by dividing by 12.
     r= annual interest rate / (12*100) (Note that, the rate is in %)

 ​2.Convert the mortgage term into months (if in years, multiply by 12).
      n= years * 12 

 3. Plug values into the amortization formula to find the monthly repayment.
 ​
let's get it by having fun while coding 