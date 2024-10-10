// input values
const shareCount = 542;
const costBasis = 17.38;
const totalOptionsReturn = 805;

// functions 
function getAdjustedBasis(shareCount, costBasis, totalOptionsReturn) {
  const totalInvested = (shareCount * costBasis);
  const adjustedBasis = ((totalInvested - totalOptionsReturn) / shareCount);
 
  return adjustedBasis;
}

// call functions 
const newBasis = getAdjustedBasis(shareCount, costBasis, totalOptionsReturn);
const saved = ((costBasis - newBasis) / costBasis) * 100;

// log values
console.log(
`Current Basis: $${costBasis.toFixed(2)}
Shares Owned: ${shareCount}
Adjusted Basis: $${newBasis.toFixed(2)}
Return from Options: ${saved.toFixed(2)}%`)