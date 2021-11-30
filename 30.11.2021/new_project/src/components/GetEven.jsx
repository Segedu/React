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
            { number: 10, clicked: false }]
    }
    render() {
        return (<div>
            {this.state.buttons.map((num, i) => <button key={i}>{num}</button>)}
        </div>)
    }
}
export default GetEven;