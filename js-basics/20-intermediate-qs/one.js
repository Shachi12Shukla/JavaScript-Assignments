// Task : Sum all transactions per user
const users = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
];
// expected output : { A: 150, B: 200 }

let transactions = {};
for(let obj in users){
    let record = users[obj];
    
    transactions[record.user] = (transactions[record.user] || 0) + record.amount; 
    
};

console.log(transactions);
