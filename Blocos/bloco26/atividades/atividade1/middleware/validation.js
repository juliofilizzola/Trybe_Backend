 const isValid = (firstName, email, password, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!(email.includes('@') && email.includes('.com'))) return false;
  if (password.length < 8) return false;

  return true;
 }

 module.exports = {isValid};