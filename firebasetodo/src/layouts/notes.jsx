import React, { Component } from "react";
import { db } from "../dbConfig";

class NoteFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeNotes = this.removeNotes.bind(this);
  }

  //Remove note function
  removeNotes() {
    alert(this.props.id);
    db.child("notes/" + this.props.id)
      .remove()
      .then(alert("hello"));
  }
  render() {
    return (
      <div className="col-sm-6 offset-sm-3">
        <div
          style={{ marginTop: "10px", marginBottom: "10px", padding: "10px" }}
          className="card"
        >
          <div>{this.props.noteContents}</div>
          <div style={{ fontWeight: "bold" }}>{this.props.createdOn}</div>
          <div
            className="row"
            style={{
              paddingRight: "10px",
              paddingLeft: "10px",
              paddingTop: "10px"
            }}
          >
            <span style={{ marginLeft: "5px" }}>
              <img
                src="https://res.cloudinary.com/djrmxber1/image/upload/c_scale,h_20,w_20/v1553571300/completed.png"
                alt="check mark"
              />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <img
                src="https://res.cloudinary.com/djrmxber1/image/upload/c_scale,h_20,w_20/v1553571300/trash.png"
                alt="delete"
                onClick={this.removeNotes}
              />
            </span>
            <span style={{ marginLeft: "5px" }}>
              <img
                src="https://res.cloudinary.com/djrmxber1/image/upload/c_scale,h_20,w_20/v1553571300/edit.png"
                alt="edit"
                style={{ Padding: "5px" }}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteFrom;
