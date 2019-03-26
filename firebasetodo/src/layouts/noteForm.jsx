import React, { Component } from "react";
import { Form, Input } from "reactstrap";
import { Alert } from "reactstrap";
import moment from "moment";

//Local
import { db } from "../dbConfig";

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      newNote: "",
      noteTooShortWarning: false,
      time: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Handle on change
  onChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  //Handle on submit
  handleSubmit(e) {
    e.preventDefault();
    const { newNote } = this.state;
    // moment
    const now = moment().format("LLLL");
    typeof newNote === "object" && newNote[0].length > 2
      ? db
          .push()
          .set({
            noteContent: newNote,
            createdOn: now
          })
          .then(
            this.setState({
              noteTooShortWarning: false,
              newNote: ""
            })
          )
      : this.setState({ noteTooShortWarning: true });
  }

  render() {
    return (
      <div className="col-sm-6 offset-sm-3">
        <Form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Alert color="danger" isOpen={this.state.noteTooShortWarning}>
              {" "}
              Note too short{" "}
            </Alert>

            <Input
              type="textarea"
              name="newNote"
              onChange={this.onChange}
              value={this.state.newNote}
              placeholder="Type your notes here ..."
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </Form>
      </div>
    );
  }
}

export default Notes;
