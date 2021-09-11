import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//import App from './App';
//import HelloMessage from './components/HelloMessage';
//import Timer from './components/Timer';
//import TodoApp from './components/TodoApp';
import MarkdownEditor from './components/MarkdownEditor';

ReactDOM.render(
	<MarkdownEditor/>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
