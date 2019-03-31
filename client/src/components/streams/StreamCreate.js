import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="streamCreate">
        <p>Create your Stream now ...</p>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="formInput">
            Stream Title:
            <Field name="title" component={this.renderInput} />
          </div>
          <div className="formInput">
            Stream Description:
            <Field name="description" component={this.renderInput} />
          </div>
          <button className="submitButton">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.title = "You must enter a description";
  }
  return errors;
};

export default connect(
  null,
  { createStream }
)(
  reduxForm({
    form: "streamCreate",
    validate: validate
  })(StreamCreate)
);
