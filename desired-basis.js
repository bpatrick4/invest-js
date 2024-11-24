// user-input 
const ownedShareCount = 65; //starting number of shares
const desiredShareCount= 100; //ending number of shares
const currentCostBasis = 68; //starting cost basis ($)
const desiredCostBasis = 65; //ending cost basis ($)

// require utils
const { getBuyPrice } = require("./utils/getBuyPrice");

// call function
const buyPrice = getBuyPrice(ownedShareCount, desiredShareCount, currentCostBasis, desiredCostBasis);

// display action required to achieve goal
console.log(
`Current: ${ownedShareCount} shares @ $${currentCostBasis}/share
Goal: ${desiredShareCount} shares @ $${desiredCostBasis}/share
Action: buy ${(desiredShareCount - ownedShareCount)} shares @ $${buyPrice.toFixed(2)}/share`
);