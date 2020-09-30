var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('start');
var questionbutton = document.getElementById('question');
var answera = document.getElementById('a');
var answerb = document.getElementById('b');
var answerc = document.getElementById('c');
var answerd = document.getElementById('d');
var counter = -1
var secondsleft = 60
var interval

function endGame(){
    clearInterval(interval)
    questionbutton.style.display='none'
    answera.style.display='none'
    answerb.style.display='none'
    answerc.style.display='none'
    answerd.style.display='none'
    resultsContainer.textContent='score: '+secondsleft
    var intitials= document.createElement("input")
    intitials.setAttribute('id', 'intitials')
    resultsContainer.appendChild(intitials)
    var submitbutton= document.createElement('button')
    submitbutton.textContent= "Submit Initials"
    resultsContainer.appendChild(submitbutton)
    submitbutton.addEventListener('click', function(){
        console.log(document.getElementById("initials").value)
    })
}










var myQuestions = [
    {

        question: "Who was the first Emperor of Rome?",
        answers: {

            a: 'Augustus',
            b: 'Julius Caesar',
            c: 'Trajan',
            d: 'Tiberius'
        },
        correctAnswer: 'a'
    },

    {
        question: "What of the name of a Roman Army?",
        answers: {

            a: 'Cohort',
            b: 'Legion',
            c: 'Maniple',
            d: 'Auxilary',
        },
        correctAnswer: 'b'

    },
    {
        question: "Who was the famous general that wreaked havoc to Italy during the Second Punic War?",
        answers:{

            a: 'Phillip VIII',
            b: 'Pyrrhus',
            c: 'Hannibal',
            d: 'Vercingetorix'

        },
        correctAnswer: 'c'
    },

    {
        question: "Who expanded the Roman Empire's borders to their greatest extent?",
        answers:{

            a: 'Marcus Aerulius',
            b: 'Constantine',
            c: 'Hadrian',
            d: 'Trajan',
        },
        correctAnswer: 'd'
    }



];

startButton.addEventListener("click", function(){
    counter++;
    questionbutton.textContent = myQuestions[counter].question;
    answera.textContent = myQuestions[counter].answers.a;
    answerb.textContent = myQuestions[counter].answers.b;
    answerc.textContent = myQuestions[counter].answers.c;
    answerd.textContent = myQuestions[counter].answers.d;
    startButton.style.display= 'none';
    
    
    
     interval = setInterval(function(){
            secondsleft--;
            console.log(secondsleft)
            if(secondsleft===0){
                endGame()
            }

        }, 1000);
        
    

});

answera.addEventListener("click", function(){
    if(myQuestions[counter].correctAnswer==='a'){
        alert('Correct!')
    }
    else{
        secondsleft= secondsleft - 10
    }
    counter++; 
    if(counter>3){
        endGame()
        return
    }
    questionbutton.textContent = myQuestions[counter].question;
    answera.textContent = myQuestions[counter].answers.a;
    answerb.textContent = myQuestions[counter].answers.b;
    answerc.textContent = myQuestions[counter].answers.c;
    answerd.textContent = myQuestions[counter].answers.d;
});

answerb.addEventListener("click", function(){
    if(myQuestions[counter].correctAnswer==='b'){
        alert('Correct!')
    }
    else{
        secondsleft= secondsleft - 10
    }
    counter++;
    if(counter>3){
        endGame() 
        return
    }
    questionbutton.textContent = myQuestions[counter].question;
    answera.textContent = myQuestions[counter].answers.a;
    answerb.textContent = myQuestions[counter].answers.b;
    answerc.textContent = myQuestions[counter].answers.c;
    answerd.textContent = myQuestions[counter].answers.d;
});

answerc.addEventListener("click", function(){
    if(myQuestions[counter].correctAnswer==='c'){
        alert('Correct!')
    }
    else{
        secondsleft= secondsleft - 10
    }
    counter++;
    if(counter>3){
        endGame()
        return
    }
    questionbutton.textContent = myQuestions[counter].question;
    answera.textContent = myQuestions[counter].answers.a;
    answerb.textContent = myQuestions[counter].answers.b;
    answerc.textContent = myQuestions[counter].answers.c;
    answerd.textContent = myQuestions[counter].answers.d;
});

answerd.addEventListener("click", function(){
    if(myQuestions[counter].correctAnswer==='d'){
        alert('Correct!')
    }
    else{
        secondsleft= secondsleft - 10
    }
    counter++;
    if(counter>3){
        endGame()
        return
    }
    questionbutton.textContent = myQuestions[counter].question;
    answera.textContent = myQuestions[counter].answers.a;
    answerb.textContent = myQuestions[counter].answers.b;
    answerc.textContent = myQuestions[counter].answers.c;
    answerd.textContent = myQuestions[counter].answers.d;
});

