import { Component } from 'react';

class GetEven extends Component {
    state = {
        buttons: []
    }

    componentDidMount() {
        const temp = []
        for (let i = 0; i < 10; i++) {
            let randNum = Math.floor(Math.random() * 19 + 1)
            let newObj = { number: randNum, clicked: false }
            temp.push(newObj)
        }
        this.setState({ buttons: temp })
    }

    clickHandler = (index) => {
        let newButtons = this.state.buttons;
        if (newButtons[index].number % 2 === 0) {
            newButtons[index].clicked = true;
            this.setState({ buttons: newButtons });
        }
    }

    render() {
        return (<div>
            {this.state.buttons.map((btn, i) => <button disabled={btn.clicked} onClick={() => {
                return this.clickHandler(i)
            }} key={i}>{btn.number}</button>)}
        </div>)
    }
}

export default GetEven;

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
