import React from "react";

class CardForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            note: ''
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onNoteChangeHandler = this.onNoteChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event){
        this.setState(() => {
            return {
              title: event.target.value
            };
          });
    }

    onNoteChangeHandler(event){
        this.setState(() => {
            return {
              note: event.target.value
            };
          });
    }

    onSubmitHandler(event){
        this.props.onSave(this.state.title, this.state.note);
        
        event.preventDefault();
    }

    render(){

        return(
            <div className="container-form card left">
                <h1>Form Pembuat Catatan</h1>
                <form onSubmit={this.onSubmitHandler}>
                <div className="field-form">
                    <label htmlFor="title">Judul :</label>
                    <input type="text" name="title" id="title" required
                    value={this.state.title} onChange={this.onTitleChangeHandler}/>
                </div>
                <div className="field-form">
                    <label htmlFor="note">Catatan :</label>
                    <textarea name="note" id="note" cols="30" rows="5" required onChange={this.onNoteChangeHandler} defaultValue={this.state.note}></textarea>
                </div>
                    <button className="btn-save" type="submit">Save</button>
                </form>
            </div>
        );
        }
}

export default CardForm;