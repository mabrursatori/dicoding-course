import React from "react";
import CardForm from "./CardForm";
import CardNote from "./CardNote";
import generateID from "./utils/generateID";
import {getInitialData} from "./utils/index";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: getInitialData()};

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onReverseHandler = this.onReverseHandler.bind(this);
    }

    onDeleteHandler(id){
        this.setState((previousState) => {
            return {
              data: previousState.data.filter(item => item.id !== id)
            };
          });

    }

    onReverseHandler(id){
        console.log(id);
        this.setState((previousState) => {
            return {
              data: previousState.data.map(item => {
                  if(item.id === id) item.archived = !item.archived
                  return item;
              })
            };
          });
    }

    onAddHandler(title, body){
        this.setState((previousState) => {
            return {
              data: [...previousState.data, {id: generateID(), title, body, createdAt: new Date(Date.now()).toISOString()}]
            };
          });

    }

    render(){

        return(
            <div className="container">
                <CardForm onSave={this.onAddHandler}/>
                <div className="container-colomn">
                    <div className="left">
                    <CardNote 
                    data={this.state.data.filter(item => !item.archived)} 
                    onDelete={this.onDeleteHandler} 
                    onReverse={this.onReverseHandler}
                    title="Catatan Aktif"/>
                    </div>
                    <div className="right">
                    <CardNote 
                    data={this.state.data.filter(item => item.archived)} 
                    onReverse={this.onReverseHandler}
                    onDelete={this.onDeleteHandler} 
                    title="Catatan Arsip"/>
                    </div>
                
                </div>
                
            </div>
        );
    }
}

export default App;