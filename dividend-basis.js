// input values
const shareCount = 100;
const costBasis = 10;
const totalDivReturn = 20;

// functions 
function getAdjustedBasis(shareCount, costBasis, totalDivReturn) {
  const totalInvested = (shareCount * costBasis);
  const adjustedBasis = ((totalInvested - totalDivReturn) / shareCount);
 
  return console.log(`Adjusted Cost Basis: $${adjustedBasis.toFixed(2)}`);
}

getAdjustedBasis(shareCount, costBasis, totalDivReturn);
