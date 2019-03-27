import React, { Component } from "react";

//Local files
import "./App.css";
import { db } from "./dbConfig";

//Local components imports
import NotesInput from "./layouts/noteForm";
import Notes from "./layouts/notes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  //Life cycle
  componentWillMount() {
    const previousNotes = this.state.notes;

    //Data snapshot
    db.child("notes").on("child_added", snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
        createdOn: snap.val().createdOn
      });

      this.setState({
        notes: previousNotes
      });
    });
  }

  //Life cycle
  componentDidMount() {
    const previousNotes = this.state.notes;

    this.setState({
      notes: previousNotes
    });
  }

  render() {
    return (
      <div>
        <div
          style={{ textAlign: "center", padding: "50px" }}
          className="jumbotron"
        >
          <h1>Firease and React - TO DO App</h1>
        </div>
        <div style={{ height: "340px", overflow: "auto" }}>
          {this.state.notes.map(note => {
            return (
              <Notes
                key={note.id}
                noteContents={note.noteContent}
                createdOn={note.createdOn}
                id={note.id}
              />
            );
          })}
        </div>
        <div
          className="footer"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            lineHeight: "60px" /* Vertically center the text there */,
            backgroundColor: "#f5f5f5",
            padding: "20px"
          }}
        >
          <NotesInput />
        </div>
      </div>
    );
  }
}

export default App;
