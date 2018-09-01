function takeANumber(line,customer){
  line.push(customer)
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}
function nowServing(line){
  if (line.length==0){
    return "there is nobody waiting to be served"
  }
  else{
    return line.shift()
  }
}
