import React, { Component } from "react";
import CustomModal from "../components/Modal"
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

// python manage.py runserver

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            todoList: [],
            modal: false,
            activeItem: {
                title: "",
                description: "",
                completed: false,
            },
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.refreshList();
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    refreshList = () => {
        // this.setState({ loading: true })
        axios
            .get("/api/todo/")
            .then((res) => {
                this.setState({ todoList: res.data })
                // setTimeout(() => this.setState({ loading: false }), 1000);

            })
            .catch((err) => {
                // this.setState({ loading: false })
                console.log(err)
            })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    handleSubmit = (item) => {
        this.toggle();

        if (item.id) {
            axios
                .put(`/api/todo/${item.id}/`, item)
                .then((res) => this.refreshList());
            return;
        }
        console.log(item)
        axios
            .post("/api/todo/", item)
            .then((res) => this.refreshList())
    }

    handleDelete = (item) => {
        axios
            .delete(`/api/todo/${item.id}/`)
            .then((res) => this.refreshList())
    }

    createItem = () => {
        const item = { title: "", description: "", completed: false }
        this.setState({ activeItem: item, modal: !this.state.modal });
    }

    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
    }

    displayCopmleted = (status) => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }

        return this.setState({ viewCompleted: false })
    }

    renderTabList = () => {
        return (
            <div className="nav nav-tabs">
                <span
                    className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
                    onClick={() => this.displayCopmleted(true)}
                >
                    Complete
                </span>
                <span
                    className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
                    onClick={() => this.displayCopmleted(false)}
                >
                    Incomplete
                </span>
            </div>
        )
    }

    renderItems = () => {
        const { viewCompleted } = this.state
        const newItems = this.state.todoList.filter(
            (item) => item.completed === viewCompleted
        )

        return newItems.map((item) => (
            <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span
                    className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
                    title={item.description}
                >
                    {item.title}
                </span>
                <span>
                    <button className='btn btn-secondary mr-2' onClick={() => this.editItem(item)}>
                        Edit
                    </button>
                    <button className='btn btn-danger' onClick={() => this.handleDelete(item)}>
                        Delete
                    </button>
                </span>
            </li>
        ))
    }

    render() {
        return (
            <main className='container'>
                <h1 className='text-white text-uppercase text-center my-4'>Todo app</h1>
                <div className='row'>
                    <div className='col-md-6 col-sm-10 mx-auto p-0'>
                        <div className='card p-3'>
                            <div className='mb-4'>
                                <button className='btn btn-primary' onClick={this.createItem}>
                                    Add Task
                                </button>
                            </div>
                            {this.renderTabList()}
                            <ul className='list-group list-group-flush border-top-0'>
                                {this.state.loading ?
                                    <div className="mx-auto my-4">
                                        <ThreeDots height="50" />
                                    </div> : this.renderItems()
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {this.state.modal ? (
                    <CustomModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>
        )
    }
}
export default Todo;