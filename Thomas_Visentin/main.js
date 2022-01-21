const quizData =[





    {
    question :"Quel est le nom de notre cher guide ?",
    a:"Maitre Gims.",
    b:"BOB.",
    c:"Sébastien.",
    d:"Gérard.",
    correct: "b",
},


{
    question :"Pour les Grecs, la musique est...",
    a:"Essentiel.",
    b:"Un bon moyen de s'exprimer.",
    c:"Le plus beau des arts.",
    d:"La réponse D.",
    correct: "c",
},

{
    question :"Lequel de ces 4 instruments ne datent pas de l'Antiquité ?",
    a:"La lyre.",
    b:"La harpe.",
    c:"La cithare.",
    d:"L'aulos.",
    correct: "b",
},

{
    question :"Au Moyen-Âge, combien de style musicaux existaient-ils ?",
    a:"2.",
    b:"4.",
    c:"12.",
    d:"3456.",
    correct: "a",
},

{
    question :"Parmis ces 4 instruments, lequel date t'il du moyen-Âge ?",
    a:"Le piano.",
    b:"Le bandjo.",
    c:"La flute.",
    d:"Le Luth.",
    correct: "d",
},

{
    question :"Entre lesquelle de ces périodes est situé la renaissance ? ",
    a:"Le Moyen-Âge et L'époque Baroque.",
    b:"L'Antiquité et Le Moyen-Âge.",
    c:"L'époque contemporaine et Les temps moderne.",
    d:"L'époque de nos grands frères.",
    correct: "a",
},

{
    question :"À la renaissance, quelle invention va permettre de diffuser plus rapidement les oeuvres musical ?",
    a:"La poste.",
    b:"L'imprimerie.",
    c:"La roue.",
    d:"Les pigeons voyageurs.",
    correct: "b",
},

{
    question :"Quel instrument va faire son apparition à la période classique ?",
    a:"La flûte traversière.",
    b:"La contrebasse.",
    c:"La guitare.",
    d:"Le piano.",
    correct: "d",
},

{
    question :"Quelle thématique musical est à la mode à l'époque romantique ?",
    a:"La moral.",
    b:"L'ennui.",
    c:"L'expression des sentiments.",
    d:"Le quotidien mossade.",
    correct: "c",
},

{
    question :"Quel était la volonté principal des auteurs de l'époque moderne ?",
    a:"Faire de la bonne musique.",
    b:"Survivre.",
    c:"Se libérer des modèles musicaux précédent.",
    d:"Écrire à maximum de chansons.",
    correct: "c",
},

{
    question :"Quelle invention va boulverser le milieu musical au 19 ème siècle ? ",
    a:"L'électricité.",
    b:"La machine à vapeur.",
    c:"La voiture.",
    d:"Le cinéma.",
    correct: "a",
},

{
    question :"Qu'est ce qui défini le mieux l'époque contemporaine, musicalement parlant ?",
    a:"Jul et ses 14 albums.",
    b:"La grande diversité de style.",
    c:"La liberté d'expression.",
    d:"Une hausse exponentiel d'artistes.",
    correct: "b",
},

{
    question :"Quel est le plus grands groupe de musique de tout les temps ?",
    a:"Les Red Hot Chili Pepper.",
    b:"Les Red Hot Chili Pepper.",
    c:"Les Red Hot Chili Pepper.",
    d:"Les Red Hot Chili Pepper.",
    correct: "a,b,c,d",
},

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll ('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById ('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    
    deselectAnswer()

    const currentQuizData = quizData [currentQuiz]

    questionEl.innerText = currentQuizData. question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d




}

function deselectAnswer(){
    answerEls.forEach(answerEls=> answerEls.checked = false)

}

function getSelected() {

let answer
answerEls.forEach(answerEl=> {
    if(answerEl.checked){
        answer = answerEl.id
    }
})
return answer
}

submitBtn.addEventListener('click',() => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData [currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else{
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick = "location. reload()">Reload</button>
            `
        }

    }
})