{
  const answerButtons = document.querySelectorAll(".answerButton");
  for (const button of answerButtons) {
    let inner = button.parentElement;
    let answer = button.previousElementSibling;
    let question = button.previousElementSibling;
    inner.counter = 0;
    button.addEventListener("click", function(event) {
      console.log(inner);
      console.log(answer);
      console.log(question);
      inner.counter++;
      console.log(inner.counter);
      if (inner.counter % 2 == 0) {
        answer.style.display = "none";
        question.innerHTML.display = "initial";
        button.innerHTML = "Click For Answer";
      } else {
        question.innerHTML.display = "none";
        answer.style.display = "initial";
        button.innerHTML = "Click To Hide Answer";
      }
    });
  }
}
