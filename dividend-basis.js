// user-input 
const shareCount = 108; //number of shares
const costBasis = 64.4; //cost basis ($)
const totalReturn = 39.00; //dividend return ($)

// require utils
const { getAdjustedBasis } = require("./utils/getAdjustedBasis");

// call functions 
const adjBasis = getAdjustedBasis(shareCount, costBasis, totalReturn);
const saved = ((costBasis - adjBasis) / costBasis) * 100;

// display adjusted return
console.log(
`Adjusted Basis: $${adjBasis.toFixed(2)}
Current Basis: $${costBasis.toFixed(2)}
Shares Owned: ${shareCount}
Dividend Return: ${saved.toFixed(2)}%`
);