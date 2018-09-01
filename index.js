function takeANumber(line,customer){
  console.log(line)
  return `Welcome, ${customer}. You are number ${line.findIndex(customer)+1} in line.`
}
function checkCustomer(customer){
  
}
var line = ['grace','tom']
console.log(line.findIndex('tom'))
takeANumber(line,'grace')
