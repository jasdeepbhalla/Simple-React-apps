import './styles.scss';


import React from 'react';
import ReactDOm from 'react-dom';
import App from './components/App';


// class App extends React.Component{

// 	render(){
// 		return <div className = "app">
// 		<p>Aha</p>
// 		</div>;
// 	}

// }

const root = document.getElementById('app-container');

ReactDOm.render(<App />, root);
