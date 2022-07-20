let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

console.log(weeklyExpensesQuestions)

for(let i = 0; i < weeklyExpensesQuestions.length; i++){
    let response = window.prompt(weeklyExpensesQuestions[i])
    weeklyExpenses = weeklyExpenses+response

    console.log(weeklyExpenses)
}