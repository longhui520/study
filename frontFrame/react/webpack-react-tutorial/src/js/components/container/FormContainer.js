import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Example from "../presentational/Example";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      console.log(event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <Example />
        <p>{seo_title}</p>
      </form>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />,wrapper) : false;