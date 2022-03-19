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


    let answers = [

    <div>
    <input type='radio' id='correct' name='lang-answer' value='correct' />
        <label for='correct'>{props.lesson.corr_ans}</label><br/> 
    </div>,
    <div>
    <input type='radio' id='wrong1' name='lang-answer' value='wrong1' />
                    <label for='wrong1'>{props.lesson.wrong1}</label><br/> 

    </div>,
    
    <div>
    <input type='radio' id='wrong2' name='lang-answer' value='wrong2'/>
        <label for='wrong2'>{props.lesson.wrong2}</label><br/> 
    </div>,

    <div>
    <input type='radio' id='wrong3' name='lang-answer' value='wrong3' />
        <label for='wrong3'>{props.lesson.wrong3}</label><br/>
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

        <div>
            <h1>{props.lesson.question} </h1>
         <form>
            {answerElement}
        </form>   
        <button>Submit answer</button>
        </div>
        
    );
};

export default questionBox;