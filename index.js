function takeANumber(line,customer){
  line.push(customer)
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}
function nowServing(line){
  if (line.length==0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line){
  if (line.length==0){
    return "The line is currently empty"
  }
  else{
    return `The line is currently: ${emunator(line)}`
  }
}
function emunator(line){
  var toreturn = ""
  for (var customer of line){
    toreturn = toreturn+", "+line.indexOf(customer)+". "+customer
  }
}
