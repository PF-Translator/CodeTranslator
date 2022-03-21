import React from 'react';
;

import './../styles/styles.scss'

 import QuestionBox from '../components/questionBox.jsx';



// render a new questions box 

// get the questions for the current learn language
    // store questionBox components for each question into the questionList





const mainPage = (props) => {

    // on load send a fetch request to the database to grab the question le

//const arr = props.state.learnLanguageTable; // passed in questiosn from the database
const lessonList = [];


const testObj = {
    lesson: 'forLoop',
    corr_ans: 'corrrect',
    wrong1: 'wrong1',
    wrong2: 'wrong2',
    wrong3: 'wrong3',
    question: 'what is the right answer'
}

const test = <QuestionBox lessons = {testObj} key = {1} />;
    return (
        <div id='mainPage'>
            <h1> Code Translator </h1>
            
            {test}
               
            
        </div>
    );
};

export default mainPage;