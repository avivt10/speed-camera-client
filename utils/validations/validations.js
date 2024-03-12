export const validateFirstName = (firstName) => {
  const firstNameRegex = /^[A-Za-z]+$/;
  return firstNameRegex.test(firstName)
};

export const validateLastName = (lastName) => {
  const lastNameRegex = /^[A-Za-z]+$/;
  return lastNameRegex.test(lastName)
};

export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const ValidatePhone = (phoneNumber) => {
  let phoneRegex = /^(?:(?:\+|00)972[- ]?|0)([23489]|[57]\d)\d{7}$/;
  return phoneRegex.test(phoneNumber)
}
