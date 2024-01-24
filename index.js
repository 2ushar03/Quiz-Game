const questions=[
    {
        question:"What is the color of blood when it's inside your body?",
        answers:[
            {Text:"Red",correct:true},
            {Text:"Green",correct:false},
            {Text:"Yellow",correct:false},
            {Text:"White",correct:false},
        ]
    },
    {
        question:"Which is the fastest bird in the world?",
        answers:[
            {Text:'Bald Eagle',correct:false},
            {Text:'Peregrine Falcon',correct:true},
            {Text:'Hummingbird',correct:false},
            {Text:'Raven',correct:false},
        ]
    },
    {
        question:"Which of these foods will never spoil?  ",
        answers:[
            {Text:'Honey',correct:true},
            {Text:'Cereal',correct:false},
            {Text:'Beans',correct:false},
            {Text:'Cabbage',correct:false},
        ]
    },
    {
        question:"What is the tallest waterfall in the world?",
        answers:[
            {Text:'Wailua Falls,Hawaii',correct:false},
            {Text:'Niagara Falls,New York',correct:false},
            {Text:'Angel Falls,Venezuaela',correct:true},
            {Text:'Sutherland Falls,New Zealand',correct:false},
        ]
    },
    {
        question:"Which color is not there in the rainbow?",
        answers:[
            {Text:'Blue',correct:false},
            {Text:'Violet',correct:false},
            {Text:'Purple',correct:true},
            {Text:'Green',correct:false},
        ]
    }

];

const questionelement=document.getElementById("queid");
const ansswerelement=document.getElementById("ansid");
const submitelement=document.getElementById("sbtid");

let questionindex=0;
let score=0;

function start(){
    questionindex=0;
    score=0;
    submitelement.innerHTML="Next";
    questionDisplay();    
}

function questionDisplay(){
    resetstate();
    let questionname=questions[questionindex];
    let questionno=questionindex+1;
    questionelement.innerHTML=questionno+')'+questionname.question;

    questionname.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add("btn");
        ansswerelement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}
function resetstate(){
    submitelement.style.display = "none";
    
    while(ansswerelement.firstChild){
        ansswerelement.removeChild(ansswerelement.firstChild);
    }
}
function selectanswer(e){
    const selectedOuptut=e.target;
    const iscorrect=selectedOuptut.dataset.correct==="true";
    if(iscorrect){
        selectedOuptut.classList.add("correct");
        score++;
    } 
    else{    
        selectedOuptut.classList.add("incorrect");
    }
    Array.from(ansswerelement.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
        submitelement.style.display = "block";
}
function showscore(){
    resetstate();
    questionelement.innerHTML = `YOU SCORED ${score} of ${questions.length} !`;
    submitelement.innerHTML="Play Again";
    submitelement.style.display="block";
}
function nextbutton(){
    questionindex++;
    if(questionindex < questions.length){
        questionDisplay();
    }
    else{
        showscore();
    }
}
submitelement.addEventListener("click",()=>{
    if(questionindex < questions.length){
        nextbutton();
    }
    else{
        start();
    }
});
start();