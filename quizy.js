var q11  = document.getElementById("q1-1")
q11.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "たかなわ"){
        setResult(1,true,"たかなわ")}else{
            setResult(1,false,"たかなわ")}
}, false)

var q12  = document.getElementById("q1-2")
q12.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "たかなわ"){
        setResult(1,true,"たかなわ")}else{
            setResult(1,false,"たかなわ")}
}, false)

var q13  = document.getElementById("q1-3")
q13.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "たかなわ"){
        setResult(1,true,"たかなわ")}else{
            setResult(1,false,"たかなわ")}
}, false)

var q21  = document.getElementById("q2-1")
q21.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "かめいど"){
        setResult(2,true,"かめいど")}else{
            setResult(2,false,"かめいど")}
}, false)

var q22  = document.getElementById("q2-2")
q22.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "かめいど"){
        setResult(2,true,"かめいど")}else{
            setResult(2,false,"かめいど")}
}, false)

var q23  = document.getElementById("q2-3")
q23.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "かめいど"){
        setResult(2,true,"かめいど")}else{
            setResult(2,false,"かめいど")}
}, false)

var q31  = document.getElementById("q3-1")
q31.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "こうじまち"){
        setResult(3,true,"こうじまち")}else{
            setResult(3,false,"こうじまち")}
}, false)

var q32  = document.getElementById("q3-2")
q32.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "こうじまち"){
        setResult(3,true,"こうじまち")}else{
            setResult(3,false,"こうじまち")}
}, false)

var q33  = document.getElementById("q3-3")
q33.addEventListener("click", function(event){
    var text = event.target.innerHTML
    if (text === "こうじまち"){
        setResult(3,true,"こうじまち")}else{
            setResult(3,false,"こうじまち")}
}, false)

function setResult(quiznumber,judge,text) {
    var result
    if (judge === true) {
    result = "正解"   
    } else {result = "不正解"}


　var quiz1 = document.getElementById("quizarea")


  var child1 = document.createElement('p')
  var child2 = document.createElement('p')
child1.textContent =  result
child2.textContent = " 正解は [" + text +  "] です"
quiz1.appendChild(child1)
quiz1.appendChild(child2)


var quiz2 = document.getElementById("quiz2")
quiz2.appendChild(child1)
quiz2.appendChild(child2)

var quiz3 = document.getElementById("quiz3")
quiz3.appendChild(child1)
quiz3.appendChild(child2)
}
