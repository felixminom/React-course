//Import react and reactDOm
import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText= () => {
    return 'Click Me!'
}

//Create a react component
const App = () => {
    const label = "Enter name: "

    return (
    <div>
        <label className="label" htmlFor="name">
            {label}
        </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {getButtonText()}
        </button>
    </div>
    );
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);