/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
   const total = {};
   
  for(const transaction of transactions){
    const {category, price} = transaction;

    if(total[category]){
      total[category] += price;
    }
    else{
      total[category] = price;
    }
  }
  const result = [];
  for(const category in total){
    result.push({category : category , totalSpent: total[category]})
  }
  
  return result;
}

let ans = calculateTotalSpentByCategory([{ itemName: "Milk", category: "Groceries", price: 50 },
  { itemName: "Bread", category: "Groceries", price: 30 },
  { itemName: "Movie Ticket", category: "Entertainment", price: 200 }]);

// console.log(ans);
module.exports = calculateTotalSpentByCategory;

// dry run!!!