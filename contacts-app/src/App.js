import React from "react";
import CardForm from "./CardForm";
import CardNote from "./CardNote";
import generateID from "./utils/generateID";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: []};

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    onDeleteHandler(id){
        this.setState((previousState) => {
            return {
              data: previousState.data.filter(item => item.id !== id)
            };
          });

    }

    onAddHandler(title, note){
        this.setState((previousState) => {
            return {
              data: [...previousState.data, {id: generateID(), title, note}]
            };
          });

    }

    render(){

        return(
            <div className="container">
                <CardForm onSave={this.onAddHandler}/>
                <CardNote data={this.state.data} onDelete={this.onDeleteHandler}/>
            </div>
        );
    }
}

export default App;