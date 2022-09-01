function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (j = i+1; j < prices.length; j++) {
      if (prices[j] - prices[i] > profit) {
        profit = prices[j] - prices[i];
      }
    }
  }
  return profit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));


