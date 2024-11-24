// user-input 
const shareCount = 542; //number of shares
const costBasis = 17.38; //cost basis ($)
const totalReturn = 805; //dividend return ($)

// require utils
const { getAdjustedBasis } = require("./utils/getAdjustedBasis");

// call functions 
const adjBasis = getAdjustedBasis(shareCount, costBasis, totalReturn);
const saved = ((costBasis - newBasis) / costBasis) * 100;

// display adjusted return
console.log(
`Adjusted Basis: $${adjBasis.toFixed(2)}
Current Basis: $${costBasis.toFixed(2)}
Shares Owned: ${shareCount}
Dividend Return: ${saved.toFixed(2)}%`
);