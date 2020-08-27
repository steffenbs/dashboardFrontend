import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './notesApp.css';
import debounce from './helpers'; 


class EditorComponent extends Component {
    constructor() {
      super();
      this.state = {
        body: '',
        title: '',
        notes_id: ''
      };
    }
  
    componentDidMount = () => {
      this.setState({
        body: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        notes_id: this.props.selectedNote.notes_id
      });
    }
  
    componentDidUpdate = () => {
      if(this.props.selectedNote.notes_id !== this.state.notes_id) {
        this.setState({
          body: this.props.selectedNote.body,
          title: this.props.selectedNote.title,
          notes_id: this.props.selectedNote.notes_id
        });
      }
    }
  
    render() {

      return(
        <div className="editorDiv">
          
          <input
            className=""
            placeholder='Note title...'
            value={this.state.title ? this.state.title : ''}
            onChange={(e) => this.updateTitle(e.target.value)}>
          </input>
          <ReactQuill className="noteBox"
            value={this.state.body} 
            onChange={this.updateBody}
            >
          </ReactQuill>
        </div>
      );
    }
    updateBody = async (val) => {
      await this.setState({ body: val });
      this.update();
    };
    updateTitle = async (txt) => {
      await this.setState({ title: txt });
      this.update();
    }
    update = debounce(() => {
      this.props.updateNote({
        notes_id: this.state.notes_id,
        title: this.state.title,
        body: this.state.body
      })
    }, 500);
  }

  export default EditorComponent