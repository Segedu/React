import { Component } from "react";
import axios from 'axios';

class GetFromJsonPlaceholder extends Component {
    state = { url: "", itemsLength: 0 };
    getLength = () => {
        axios
            .get(this.state.url)
            .then((response) => {
                this.setState({ itemsLength: response.data.length })
                console.log(response.data)
            })
            .catch((error) => { console.log(error) })
    }

    changeHandler = input => this.setState({ url: input.target.value })
    
    render() {
        return (
            <div className="GetFromJsonPlaceholder">
                <input onChange={this.changeHandler} type="text" />
                <button onClick={this.getLength}>Get</button>
                <p>number of items:{this.state.itemsLength}</p>

            </div>
        )
    }
}

export default GetFromJsonPlaceholder;