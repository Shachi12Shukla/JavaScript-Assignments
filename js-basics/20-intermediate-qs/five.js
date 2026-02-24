// Task : Transform array of orders into revenue per category
let orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
];

for(const index in orders){
    let record = orders[index];
    orders[record] = record.price;
    delete record.id;
}
console.log(orders);


