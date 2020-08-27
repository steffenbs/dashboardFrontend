import React, {Component, Fragment } from 'react';
import './notesApp.css';

import ListNotes from './listNotes';
import EditorComponent from './EditorComponent';
class Notes extends Component {
    constructor() {
        super();
        this.state = {
          selectedNoteIndex: null,
          selectedNote: null,
          notes: null
        };
      }

    render() {
        return (
            <Fragment>
                <ListNotes 
                selectNote={this.selectNote}
                notes={this.state.notes} 
                deleteNote={this.deleteNote}
                newNote={this.newNote}/>
                {
                    this.state.selectedNote ?
                    <EditorComponent
                    selectedNote={this.state.selectedNote}
                    selectedNoteIndex={this.state.selectedNoteIndex}
                    updateNote={this.updateNote}
                    >
                    </EditorComponent> : 
                    null
                }
            </Fragment>
        )
    }

    componentDidMount = async () => {
        try {
            const response = await fetch('http://localhost:5000/notes', {
                method: 'GET',
                headers: {Authorization: localStorage.Authorization },
            });

            const parseRes = await response.json()
            this.setState({ notes: parseRes.sort((a, b) => a.date > b.date ) });
        } catch (err) {
            console.log(err.message)
        }
    }
    componentDidUpdate  = async () => {
        try {
            const response = await fetch('http://localhost:5000/notes', {
                method: 'GET',
                headers: {Authorization: localStorage.Authorization },
            });

            const parseRes = await response.json()
            this.setState({ notes: parseRes.sort((a, b) => a.date > b.date ) });
        } catch (err) {
            console.log(err.message)
        }
    }
    // selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });
    selectNote = (note) => {
        this.setState({ selectedNoteIndex: note.notes_id, selectedNote: note });
    }

    newNote = async (note) => {
        try {
            console.log(note)
            await fetch('http://localhost:5000/notes/make_note', {
                method: 'POST',
                headers: {Authorization: localStorage.Authorization, 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title: note,
                    body: ''
                }),
            });
        } catch (err) {
            console.log(err.message)
        }
    }

    updateNote = async (note) => {
        try {
            await fetch(`http://localhost:5000/notes/${note.notes_id}`, {
                method: 'PATCH',
                headers: {Authorization: localStorage.Authorization, 'Content-Type': 'application/json'},
                body: JSON.stringify(note),
            });
        } catch (err) {
            console.log(err.message)
        }
    }

    deleteNote = async (note) => {
        try {
            await fetch(`http://localhost:5000/notes/${note.notes_id}`, {
                method: 'DELETE',
                headers: {Authorization: localStorage.Authorization},
            });        
        } catch (err) {
            console.log(err.message)
        }
    }
}

export default Notes
