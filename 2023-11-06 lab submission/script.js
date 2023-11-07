function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const email1 = "example@example.com";
const email2 = "invalid-email";
console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

const phoneNumber1 = "1234567890";
const phoneNumber2 = "123-456-7890";
console.log(validatePhoneNumber(phoneNumber1)); // true
console.log(validatePhoneNumber(phoneNumber2)); // false

  function validateDomain(domain) {
    const domainRegex = /^(?!:\/\/)(?!-)([a-zA-Z0-9-]{1,63}(?<!-)\.?)+(?:[a-zA-Z]{2,})$/;
    return domainRegex.test(domain);
  }
  
  const domain1 = "example.com";
  const domain2 = "subdomain.example.co.uk";
  const domain3 = "not a&domain.com";
  
  console.log(validateDomain(domain1)); // true
  console.log(validateDomain(domain2)); // true
  console.log(validateDomain(domain3)); // false
  