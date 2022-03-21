import React from 'react';

import './../styles/styles.scss'
// props.lesson.question
// props.lesson.corr_ans
// props.lesson.wrong1
// props.lesson.wrong2
// props.lesson.wrong3

// store the answer buttons in an array

    // loop through the array grabbing a random element and push that to the rendered component
    

const questionBox = (props) => {

    let answerResponse = [];


    // show example for both learn and known language




    // store examples for both 
    const examples = [];



    function rightAnswer(){

    }

    function wrongAnswer(){
        let response = (
            <div>
                Incorrect!
            </div>
        )
    }


    let answers = [

    <div key={1}>
        <button className='answerButton' onClick={rightAnswer}>{props.lesson.corr_ans}</button>
    </div>,
    <div key={2}>
        <button className='answerButton' onClick={wrongAnswer}>{props.lesson.wrong1}</button>

    </div>,
    
    <div key={3}>
        <button className='answerButton' onClick={wrongAnswer} >{props.lesson.wrong2}</button>
    </div>,

    <div key={4}>
        <button className='answerButton' onClick={wrongAnswer} >{props.lesson.wrong3}</button>
    </div>
            

    ]
    const answerElement = []
    // create an array of answers
    for ( let i = 0; i < 4 ; i ++){
        const el = Math.floor(Math.random() * answers.length)
        answerElement.push(answers[el])
        answers.splice(el,1)

    }
    // randomly select from that array
    // and render that element 


    return (

        <div id='questionContainer'>
            <h1>{props.lesson.question} </h1>
         <form id='answersContainer'>
            {answerElement}
        </form>   
            {answerResponse}
        </div>
        
    );
};

export default questionBox;