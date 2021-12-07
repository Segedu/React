import { Component } from 'react';

class GetEven extends Component {
    state = {
        elementsArray: [],
        counter: 0,
    }

    componentDidMount() {
        const tempArray = []
        for (let i = 0; i < 10; i++) {
            let randNum = Math.floor(Math.random() * 19 + 1)
            let newObj = { number: randNum, clicked: false }
            tempArray.push(newObj)
        }
        this.setState({ elementsArray: tempArray })
        this.startTimer()
    }

    startTimer = () => {
        setInterval(() => { this.setState({ counter: this.state.counter + 1 }) }, 1000)
    }

    clickHandler = (index) => {
        let newElementsArr = this.state.elementsArray;
        if (newElementsArr[index].number % 2 === 0) {
            newElementsArr[index].clicked = true;
            this.setState({ elementsArray: newElementsArr });
        }
    }

    render() {
        const elements = this.state.elementsArray.map((btn, i) => <button disabled={btn.clicked}
            onClick={() => { return this.clickHandler(i) }} key={i}>{btn.number}</button>)
        return (
            <div>
                {elements}
                <p>counter: {this.state.counter}</p>
            </div>
        )
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
