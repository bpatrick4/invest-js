// return adjusted cost basis from dividends, options, etc.
function getAdjustedBasis(shareCount, costBasis, totalReturn) {
  const totalInvested = (shareCount * costBasis);
  const adjustedBasis = ((totalInvested - totalReturn) / shareCount);
 
  return adjustedBasis;
}

module.exports = {
  getAdjustedBasis,
}