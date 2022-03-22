import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './../styles/styles.scss'
import QuestionBox from '../components/questionBox.jsx';

//-------------------------------------------------------------------MAIN/QUIZ PAGE--------------------------------------------------------
const mainPage = (props) => {

    // on load send a fetch request to the database to grab the question le


// list of all the questions

const [index, setIndex ] = useState(0);
const [isRight, setisRight] = useState(true);

const questionsList = [];

let currQuestion;
//showing one question with multiple choice answers
for( const el in props.state.learn_languageTable){
    questionsList.push(<QuestionBox lesson = {props.state.learn_languageTable[el]} key = {el} setisRight = {setisRight} changeQuestion={changeQuestion}/>)
}


// wrong display for incorrect answer
const wrongDiv = (
    <div id='wrongDiv'>
    YOU ARE WRONG LOSER
        <div>
        {props.state.known_language}:
        <div id='correctionBox'>
            {props.state.known_languageTable[index].correct_answer}
        </div>
          {props.state.learn_language}:
            <div id='correctionBox'>
              {props.state.learn_languageTable[index].correct_answer}   
            </div>
       
        </div>
    <button onClick={changeQuestion}>Next question</button>
    </div>
)

// render next question on call, preventing from going to end of array while also resetting isRigh
function changeQuestion(e){
    e.preventDefault();
    if(index < questionsList.length - 1){
       setIndex( index + 1) 
    }
    setisRight(null)
}

// update rendered element with new question from questions array
currQuestion = questionsList[index];

// render the wrong display if the incorrect answer was chosen
if(isRight === false){
    currQuestion = wrongDiv;
}

    return (
        <div id='mainPage'>
        <div id='mainBar'>
            <div><h1> Code Translator </h1></div>
            <div id='settings'><Link to='/settings'> Settings</Link></div>           
        </div>                  
            {currQuestion}                           
        </div>
    );
};

export default mainPage;