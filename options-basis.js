// user-input 
const shareCount = 542; //number of shares
const costBasis = 17.38; //cost basis ($)
const totalReturn = 805; //options return ($)

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
Return from Options: ${saved.toFixed(2)}%`
);