const verificationResponse = (products) => {
  if(products) return false;
  return true;
};

const verificationReturnResponse = (products) => {
  let obj = Object.values(products)
  if(obj.length > 0) return false;
  return true;
};

const verificationRequest = (name, brand) => {
  if(name.trim().length > 4 && brand.trim().length > 4) return false;
  return true;
}

module.exports = { verificationResponse, verificationReturnResponse, verificationRequest };
