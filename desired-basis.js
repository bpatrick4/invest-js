// input values
const ownedShareCount = 10;
const desiredShareCount= 20;
const currentCostBasis = 30;
const desiredCostBasis = 25;

// functions 
function getBuyPrice(startingShareCount, endingShareCount, startingCostBasis, endingCostBasis) {
  const deltaShareCount = (endingShareCount - startingShareCount);
  const startingInvested = (startingShareCount * startingCostBasis);
  const endingInvested = (endingShareCount * endingCostBasis);
  const sharePrice = ((endingInvested - startingInvested) / deltaShareCount);

  return console.log(`Buy Price: $${sharePrice.toFixed(2)}`);
}

getBuyPrice(ownedShareCount, desiredShareCount, currentCostBasis, desiredCostBasis);
