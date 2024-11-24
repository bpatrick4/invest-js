// return a share price of a stock
function getBuyPrice(startingShareCount, endingShareCount, startingCostBasis, endingCostBasis) {
  const deltaShareCount = (endingShareCount - startingShareCount);
  const startingInvested = (startingShareCount * startingCostBasis);
  const endingInvested = (endingShareCount * endingCostBasis);
  const sharePrice = ((endingInvested - startingInvested) / deltaShareCount);

  return sharePrice;
}

module.exports = {
  getBuyPrice,
}