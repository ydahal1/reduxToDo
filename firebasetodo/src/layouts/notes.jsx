import React, { Component } from "react";
class NoteFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <button
              style={{ marginLeft: "10px" }}
              className="btn btn-sm btn-primary"
            >
              Completed
            </button>
            <button
              style={{ marginLeft: "10px" }}
              className="btn btn-sm btn-primary"
            >
              Edit
            </button>
            <button
              style={{ marginLeft: "10px" }}
              className="btn btn-sm btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteFrom;
