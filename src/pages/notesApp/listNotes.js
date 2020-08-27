import React, {Component, Fragment } from 'react';
import './notesApp.css';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from './helpers'; 



class ListNotes extends Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null,
        };
      }
      render() {
        const { notes } = this.props;

        if(notes) {
            return (
                <Fragment>
                    <List id="notesList" disablePadding>
                <Button id="newNoteBtn"
                onClick={this.newNoteBtnClick}
                >{this.state.addingNote ? 'Cancel' : 'New Note'}</Button>
                {
                    this.state.addingNote ? 
                    <div id="newNoteTitle">
                    <input type='text'
                        // className={classes.newNoteInput}
                        placeholder='Enter note title'
                        onKeyUp={(e) => this.updateTitle(e.target.value)}>
                    </input>
                    <Button 
                        // className={classes.newNoteSubmitBtn}
                        onClick={this.newNote}>Submit Note</Button>
                    </div> :
                    null
                }
                <div id="listOfNotes">
                            {
                            
                            notes.map(note => (
                                <ListItem button className="notesItem" key={note.notes_id} onClick={() => this.selectNote(note)}>
                                    <ListItemText className="notesListItem" >
                                        <h3 className="notesListTitle">{note.title}</h3>
                                        <div className="notesListDiv">{removeHTMLTags(note.body)}</div>
                                        <DeleteIcon onClick={() => this.deleteNote(note)}></DeleteIcon>
                                    </ListItemText>
                                </ListItem>
                            ))
                            
                            }     
                            </div>    
                        </List> 
                    </Fragment>
                    );  
                }else {
                    return(<div></div>);
                  }
        
            }
        
      
    newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
    this.setState({ title: txt });
    }
    newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
    }
    selectNote = (n) => this.props.selectNote(n);
    deleteNote = (note) => {
        if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
          this.props.deleteNote(note);
        }
      }
}

export default ListNotes
