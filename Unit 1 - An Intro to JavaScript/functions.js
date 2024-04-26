
function getInfo(lastName) {
  const firstName = prompt("What is your first name?")
  let newName = "If you married Yiyang Qianxi, your name would be " + firstName + " " + lastName
  
  return newName

  alert(newName)
}

let result = getInfo("Qianxi")
console.log(result)