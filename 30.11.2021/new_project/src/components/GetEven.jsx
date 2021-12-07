import { Component } from 'react';

class GetEven extends Component {
    state = {
        elementsArray: [],
        timer: 0,
        evenNumbersCount: 0
    }

    componentDidMount() {
        this.startGame()
    }

    startGame = () => {
        const tempArray = []
        for (let i = 0; i < 10; i++) {
            let randNum = Math.floor(Math.random() * 19 + 1)
            let newObj = { number: randNum, clicked: false }
            tempArray.push(newObj)
            // if (this.state.elementsArray.number % 2 == 0) {
            //     // sum += 10;
            //     this.setState({ evenNumbersCount: this.state.evenNumbersCount + 1 });
            // }
        }

        this.setState({ elementsArray: tempArray })
        console.log(this.state.evenNumbersCount);
        this.startTimer()
    }

    startTimer = () => {
        setInterval(() => { this.setState({ timer: this.state.timer + 1 }) }, 1000)
    }

    // isGameOver = () => {
    //     this.intervalId
    // }

    clickHandler = (index) => {
        let newElementsArr = this.state.elementsArray;
        if (newElementsArr[index].number % 2 === 0) {
            newElementsArr[index].clicked = true;
            this.setState({ elementsArray: newElementsArr });
            // this.evenNumbersCount - 1;
        }
        // if (this.evenNumbersCount == 0) {
        //     alert("Game Over You Win")
        // }
    }

    render() {
        const elements = this.state.elementsArray.map((btn, i) => <button disabled={btn.clicked}
            onClick={() => { return this.clickHandler(i) }} key={i}>{btn.number}</button>)
        return (
            <div>
                {elements}
                <p>timer: {this.state.timer}</p>
            </div>
        )
    }
}

export default GetEven;

// ******** advanced
// --- click odd number will punish by adding 1 sec to the time
// --- put time in history (use local storage e.g. using JSON for persistence)
// --- show history
// --- show items in two rows
// --- start button
// --- display elapsed seconds and 'Game Over' in Message component
// --- display each number in Item component
