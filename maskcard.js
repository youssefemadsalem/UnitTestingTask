function maskCardNumber(cardNumber) {
  const cleanNumber = cardNumber.toString().replace(/\D/g, "");
  return cleanNumber.slice(-4).padStart(16, "*");
}

module.exports = maskCardNumber;
