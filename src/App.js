import React from "react";
import logo from "./icons8-gradient-line-64.png";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: []
        };
    }

    addItem(todoValue) {
        if (todoValue !== "") {
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false
            };
            const list = [...this.state.list];
            list.push(newItem);

            this.setState({
                list,
                newItem: ""
            });
        }
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id !== id);
        this.setState({ list: updatedlist });
    }

    updateInput(input) {
        this.setState({ newItem: input });
    }

    render() {
        return ( <
            div >
            <
            img src = { logo }
            width = "100"
            height = "100"
            className = "logo" / >
            <
            h1 className = "app-title" > TODO APP < /h1> <
            div className = "container" >
            ADD <
            br / >
            <
            input type = "text"
            className = "input-text"
            placeholder = "Write what you want to add"
            required value = { this.state.newItem }
            onChange = { e => this.updateInput(e.target.value) }
            /> <
            button className = "add-btn"
            onClick = {
                () => this.addItem(this.state.newItem)
            }
            disabled = {!this.state.newItem.length } >
            Add Todo <
            /button> <
            div className = "list" >
            <
            ul > {
                this.state.list.map(item => {
                    return ( <
                        li key = { item.id } >
                        <
                        input type = "checkbox"
                        name = "idDone"
                        checked = { item.isDone }
                        onChange = {
                            () => {}
                        }
                        /> { item.value } <
                        button className = "btn"
                        onClick = {
                            () => this.deleteItem(item.id)
                        } >
                        Delete <
                        /button> < /
                        li >
                    );
                })
            } <
            li >
            <
            input type = "checkbox"
            name = ""
            id = "" / >
            This is Sam You Cannot delete me <
            button className = "btn" > Delete < /button> < /
            li > <
            /ul> < /
            div > <
            /div> <h1 className="mark2">Thank You</
            h1 > < h1 className = "mark" > The Page is Created by Samim. < /h1> < /
            div >


        );
    }
}

export default App;