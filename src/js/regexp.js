export const validateName = (userName) => {
  const regExp = /(^[a-z])(\w|-)+([a-z]$)/i;
 
  if (regExp.test(userName)) {
    let tempString = userName.substring(0, userName.length - 1)
    const regExp1 = /(\d{3,})+/
    return !regExp1.test(tempString)
  } else {
    return false
  } 
}