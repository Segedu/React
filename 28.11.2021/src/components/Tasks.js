import { Component } from "react";

class Tasks extends Component {
    state = {
        tasks:
            [
                { taskTitle: "reading", isCompleted: true },
                { taskTitle: "doctor", isCompleted: false },
                { taskTitle: "swimming", isCompleted: true },
                // { taskTitle: "presentation", isCompleted: false }
            ],
        input: "",
        update: "",
    }
    addTaskHandler = (e) => { this.setState({ input: e.target.value }) }
    addTaskBtn = (e) => {
        e.preventDefault();
        this.setState(state => {
            let newTask = {
                taskTitle: this.state.input,
                isCompleted: false
            };
            const update = state.tasks.push(newTask);
            return {
                update,
                input: ''
            };
        });
    }
    showUnCompleted = () => {
        this.setState({ tasks: this.state.tasks.filter((task) => task.isCompleted === false) })

    }
    updateHandler = (e) => {
        this.setState({ update: e.target.value })
        console.log(this.state.update);
    }

    // setTimeout(() => {
    // const tasks = [...this.state.tasks]
    // tasks.taskTitle = 
    // this.setState({tasks,[i]:this.state.update})
    // }, 3000)
    // this.setState(state => {
    updateBtn = (update, i) => {
        const tasks = this.state.tasks
        tasks.map((task, j) => {
            if (i === j) {
                return task.taskTitle = update
            }
            return task
        });
        this.setState({ tasks: tasks })
    }

    deleteBtn = i => { }


    render() {
        return (
            <div>
                {this.state.tasks.map((task, i) => {
                    return <div key={i}><h3>{task.taskTitle}</h3>
                        <button onClick={this.updateBtn}>update</button>
                        <button onClick={this.deleteBtn}>delete</button>

                    </div>
                })}
                <form>
                    <input type="text" onChange={this.addTaskHandler} placeholder="new task name" />
                    <input type="submit" value="Add" disabled={!this.state.input} onClick={this.addTaskBtn} />
                </form>
                <input type="text" id={this.i} value={this.state.update} onChange={this.updateHandler} placeholder="update" />
                <button onClick={this.showUnCompleted}>show unCompleted</button>
            </div>)
    }
}

export default Tasks;