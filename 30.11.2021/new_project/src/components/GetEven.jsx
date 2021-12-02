import { Component } from 'react';

class GetEven extends Component {
    state = {
        buttons: [
            { number: 1, clicked: false },
            { number: 2, clicked: false },
            { number: 3, clicked: false },
            { number: 4, clicked: false },
            { number: 5, clicked: false },
            { number: 6, clicked: false },
            { number: 7, clicked: false },
            { number: 8, clicked: false },
            { number: 9, clicked: false },
            { number: 10, clicked: false }
        ]
    }

    clickHandler = (index) => {
        let newButtons = this.state.buttons;
        if (newButtons[index].number % 2 === 0) {
            newButtons[index].clicked = true;
            this.setState({ buttons: newButtons });
            console.log("clicked");
        }
    }

    render() {
        return (<div>
            {this.state.buttons.map((btn, i) => <button onClick={() => { this.clickHandler(i) }} key={i}>{btn.number}</button>)}
        </div>)
    }
}

// --- rand 10 numbers integer between 1,20
// --- show them on the dom on a row 
// --- start clock
// --- click all even numbers and mark per click (greyed ? disabled ?)
// --- show elapsed second and 'Game Over' after success

// ******** advanced
// --- click odd number will punish by adding 1 sec to the time
// --- put time in history (use local storage e.g. using JSON for persistence)
// --- show history
// --- show items in two rows
// --- start button
// --- display elapsed seconds and 'Game Over' in Message component
// --- display each number in Item component

export default GetEven;