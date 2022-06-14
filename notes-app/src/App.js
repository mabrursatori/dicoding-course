import React from "react";
import CardForm from "./CardForm";
import CardNote from "./CardNote";
import generateID from "./utils/generateID";
import {getInitialData} from "./utils/index.js";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: getInitialData()};

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

    onAddHandler(title, body){
        this.setState((previousState) => {
            return {
              data: [...previousState.data, {id: generateID(), title, body}]
            };
          });

    }

    render(){

        return(
            <div className="container">
                <CardForm onSave={this.onAddHandler}/>
                <div className="container-colomn">
                    <div className="left">
                    <CardNote data={this.state.data.filter(item => !item.archived)} onDelete={this.onDeleteHandler} title="Catatan Aktif"/>
                    </div>
                    <div className="right">
                    <CardNote data={this.state.data.filter(item => item.archived)} onDelete={this.onDeleteHandler} title="Catatan Arsip"/>
                    </div>
                
                </div>
                
            </div>
        );
    }
}

export default App;