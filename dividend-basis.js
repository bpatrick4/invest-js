// input values
const shareCount = 542;
const costBasis = 17.38;
const totalDivReturn = 805;

// functions 
function getAdjustedBasis(shareCount, costBasis, totalDivReturn) {
  const totalInvested = (shareCount * costBasis);
  const adjustedBasis = ((totalInvested - totalDivReturn) / shareCount);
 
  return adjustedBasis;
}

// call functions 
const newBasis = getAdjustedBasis(shareCount, costBasis, totalDivReturn);
const saved = ((costBasis - newBasis) / costBasis) * 100;

// log values
console.log(
`Current Basis: $${costBasis.toFixed(2)}
Shares Owned: ${shareCount}
Adjusted Basis: $${newBasis.toFixed(2)}
Dividend Return = ${saved.toFixed(2)}%`)