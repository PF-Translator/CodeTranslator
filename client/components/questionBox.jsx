import React from 'react';
import './../styles/styles.scss'


    

const questionBox = (props) => {



    // update state in mainPage.js to display incorrect element
    function wrongAnswer(e){
        e.preventDefault();
        props.setisRight(false)
    }

    // store the answer buttons in an array
    let answers = [
    <div key={1}>
        <button className='answerButton' onClick={props.changeQuestion}>{props.lesson.correct_answer}</button>
    </div>,
    <div key={2}>
        <button className='answerButton' onClick={wrongAnswer}>{props.lesson.wrong1}</button>
    </div>,
    <div key={3}>
        <button className='answerButton' onClick={wrongAnswer} >{props.lesson.wrong2}</button>
    </div>,
    <div key={4}>
        <button className='answerButton' onClick={wrongAnswer} >{props.lesson.wrong3}</button>
    </div>,
    ]

    let answerElement = []

    // randomly select from that array and render that element 
    for ( let i = 0; i < 4 ; i ++){
        const el = Math.floor(Math.random() * answers.length)
        answerElement.push(answers[el])
        answers.splice(el,1)

    }
    


    return (
        <div id='questionContainer'>
            <h1>{props.lesson.question} </h1>
         <form id='answersContainer'>
            {answerElement}
        </form>   
        </div>
        
    );
};

export default questionBox;