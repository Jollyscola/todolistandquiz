const quiz = document.querySelector('.quiz')
const todolist = document.querySelector('.todolist')

quiz.addEventListener('click', () => {
    window.location.href = "./quiz.html";
})
todolist.addEventListener('click', () => {
    window.location.href = "./todelist.html";
})




const correctAnswers = ['A','B','B','A'];
const form = document.querySelector('.quiz-form');
const resultat = document.querySelector('.resultat')
form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    //check answers

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
   
        scrollTo(0,0)
//setTimeout(() => {
   resultat.querySelector('span').textContent = `${score}%`;
   resultat.classList.remove('d-none');
let output = 0
   const timer = setInterval(() => {
       resultat.querySelector('span').textContent = `${output}%`;
       if(output === score){ 
           clearInterval(timer)
       } else{
        output++
       }
   }, 10);
//}, 500);

 
})
