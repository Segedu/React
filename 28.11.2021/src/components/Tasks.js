import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Tasks.css'

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [], newTaskName: "" }
    }

    // componentWillMount() {
    //     localStorage.getItem('newTaskName') && this.setState({ tasks: JSON.parse(localStorage.getItem('newTaskName')) });
    // }

    // componentDidMount() {
    //     if (!localStorage.getItem('newTaskName')) {
    //         this.setState(
    //             this.getAllInCompleteTasks()
    //         )
    //     }
    //     else console.log("data from local storage");
    // }


    // componentWillUpdate() {
    //     localStorage.setItem('newTaskName', JSON.stringify(this.state.newTaskName));
    // }

    componentDidMount() {
        this.setState(
            this.getAllInCompleteTasks()
        )
    }

    getAllInCompleteTasks() {
        return {
            tasks:
                [
                    { taskTitle: "reading", isCompleted: false, id: uuidv4() },
                    { taskTitle: "sport", isCompleted: false, id: uuidv4() }
                ],
            newTaskName: "",
        }
    }

    addTaskInputHandler = (e) => { this.setState({ newTaskName: e.target.value }) }

    handleAddTask = (e) => {
        e.preventDefault();
        const newState = {
            ...this.state,
            tasks: [...this.state.tasks, { taskTitle: this.state.newTaskName, isCompleted: false, id: uuidv4() }],
            newTaskName: "",
        };
        this.setState(newState);
    }

    filterUnComplete = () => {
        return this.state.tasks.filter((task) => task.isCompleted === false)
    }

    setCompleted = (taskId) => {
        const task = this.state.tasks.find((t) => t.id === taskId)
        task.isCompleted = true;
        this.setState({ ...this.state });
    }

    deleteTask = (taskId) => {
        const task = this.state.tasks.filter((t) => t.id !== taskId)
        this.state.tasks.splice(task, 1);
        this.setState({ ...this.state });
    }

    render() {
        return (
            <div className="Tasks">
                <h1>To do list</h1>
                {this.filterUnComplete().map((task) => {
                    return <div key={task.id}><h1>{task.taskTitle}</h1>
                        <button onClick={() => this.setCompleted(task.id)}>completed</button>
                        <button onClick={() => this.deleteTask(task.id)}>delete</button>
                    </div>
                })}
                <form>
                    <input type="text" onChange={this.addTaskInputHandler} placeholder="new task name" />
                    <input type="button" value="Add" disabled={!this.state.newTaskName} onClick={this.handleAddTask} />
                </form>
            </div>)
    }
}

export default Tasks;