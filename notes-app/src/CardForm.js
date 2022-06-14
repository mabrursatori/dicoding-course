import React from "react";

class CardForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        this.setState(() => {
            return {
              title: event.target.value
            };
          });
    }

    onBodyChangeHandler(event){
        this.setState(() => {
            return {
              body: event.target.value
            };
          });
    }

    onSubmitHandler(event){
        this.props.onSave(this.state.title, this.state.body);
        
        event.preventDefault();
    }

    render(){

        return(
            <div className="container-form card ">
                <h1>Form Pembuat Catatan</h1>
                <form onSubmit={this.onSubmitHandler}>
                <div className="field-form">
                    <label htmlFor="title">Judul :</label>
                    <input type="text" name="title" id="title" required
                    value={this.state.title} onChange={this.onTitleChangeHandler}/>
                </div>
                <div className="field-form">
                    <label htmlFor="body">Catatan :</label>
                    <textarea name="note" id="body" cols="30" rows="5" required onChange={this.onBodyChangeHandler} defaultValue={this.state.body}></textarea>
                </div>
                    <button className="btn-save" type="submit">Save</button>
                </form>
            </div>
        );
        }
}

export default CardForm;