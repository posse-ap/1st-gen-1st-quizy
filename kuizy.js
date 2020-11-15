var quiz1_1 = document.getElementById("quiz1_1")
quiz1_1.addEventListener("click", function (event) {
    let text = event.target.innerHTML
    if (text === "たかなわ") {
        setResult(1, true, "たかなわ")
    } else {
        setResult(1, false, "たかなわ")
    }
}, false)

let quiz1_2 = document.getElementById("quiz1_2")
quiz1_2.addEventListener("click", function (event) {
    let text = event.target.innerHTML
    if (text === "たかなわ") {
        setResult(1, true, "たかなわ")
    } else {
        setResult(1, false, "たかなわ")
    }

}, false)
let quiz1_3 = document.getElementById("quiz1_3")
quiz1_3.addEventListener("click", function (event) {
    let text = event.target.innerHTML
    if (text === "たかなわ") {
        setResult(1, true, "たかなわ")
    } else {
        setResult(1, false, "たかなわ")
    }
}, false)

function setResult(quiz_number, flag, text) {
    if (flag === true) {
        result = "正解！"
    } else {
        result = "不正解。。。"
    }

    var quiz = document.getElementById("quiz" + quiz_number)
    var child1 = document.createElement('p')
    var child2 = document.createElement('p')
    child1.textContent = result
    child2.textContent = "正解は「" + text + "」です！"
    quiz.appendChild(child1)
    quiz.appendChild(child2)
}


  //

//   function setResult(quiz_number, flag, text) { 
//      var result 
//      if ( flag === true ) {
//         result = "正解！"
//} else {
//         result = "不正解！"
//}
//   }
//      var quiz = document.getElementById("quiz" + quiz_number);//

//      console.log(quiz);   