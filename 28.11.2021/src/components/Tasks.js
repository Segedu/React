import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [], newTaskName: "" }
    }

    componentDidMount() {
        this.setState(
            this.getAllInCompleteTasks()
        )
    }

    getAllInCompleteTasks() {
        return {
            tasks:
                [
                    { taskTitle: "reading", isCompleted: false, id: 1 }
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
            <div>
                {this.filterUnComplete().map((task) => {
                    return <div key={task.id}><h3>{task.taskTitle}</h3>
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