//Method 1 : traversing (Moving up/down) the dom

// const btns =document.querySelectorAll(".question-btn")
// // console.log(btns);

// btns.forEach(function (btn){
//   btn.addEventListener('click',function (eve) {
//     const question= eve.currentTarget.parentElement.parentElement
//     // console.log(question);
//     question.classList.toggle('show-text')

//   })
// })



// Method 2 : Using Selectors inside the element

const questions =document.querySelectorAll(".question")


questions.forEach(function (question) {
  // console.log(questions);

  const btn = question.querySelector('.question-btn')
  // console.log(btn);

  btn.addEventListener('click',function () {
    questions.forEach(function (item) {
      if(item !==question){
        item.classList.remove('show-text')
      }
    })

    question.classList.toggle('show-text')

  })
})
