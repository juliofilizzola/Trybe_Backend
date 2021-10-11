const verificationResponse = (products) => {
  if(products) return true;
  return false;
};

const verificationReturnResponse = (products) => {
  if(products.length > 0) return true;
  return false;
};

module.exports = { verificationResponse, verificationReturnResponse };
