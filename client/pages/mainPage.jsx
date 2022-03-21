import React from 'react';
;
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './../styles/styles.scss'

 import QuestionBox from '../components/questionBox.jsx';




// render a new questions box 

// get the questions for the current learn language
    // store questionBox components for each question into the questionList





const mainPage = (props) => {

    // on load send a fetch request to the database to grab the question le

//const arr = props.state.learnLanguageTable; // passed in questiosn from the database

// list of all the questions

const [index, setIndex ] = useState(0);
const [isRight, setisRight] = useState(true);

const questionsEl = [];

let currQuestion;

for( const el in props.state.learn_languageTable){
    questionsEl.push(<QuestionBox lesson = {props.state.learn_languageTable[el]} key = {el} setisRight = {setisRight} changeQuestion={changeQuestion}/>)
}

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

function wrongAnswer(e){
    e.preventDefault();
    currQuestion = wrongDiv;
}

function changeQuestion(e){
    e.preventDefault();
    if(index < questionsEl.length - 1){
       setIndex( index + 1) 
    }
    
    setisRight(null)
}

// populate our main page with questions from the learn language table
// props.state.learn_languageTable
currQuestion = questionsEl[index];
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