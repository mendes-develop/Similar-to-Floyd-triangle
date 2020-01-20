function accum(s){
  let lowered = s.toLowerCase()
  let string = ''
  let tempStr = ''
  for (let i=0; i< lowered.length; i++){
    tempStr = ''
    for (let j=0; j < lowered.length; j++){
      tempStr += lowered[i]
    }
    string += tempStr + "-"
  }
  return string
}


accum("abcd") //-> "A-Bb-Ccc-Dddd"
accum("RqaEzty") //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") //-> "C-Ww-Aaa-Tttt"