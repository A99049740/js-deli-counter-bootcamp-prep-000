function takeANumber(line,customer){
  console.log(line)
  return `Welcome, ${customer}. You are number ${line.findIndex(customer)+1} in line.`
}

var line = ['grace','tom']
takeANumber(line,'grace')
