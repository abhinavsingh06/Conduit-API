import React, { Component } from "react";
import "../newarticle.css";

export class NewArticle extends Component {
  state = {
    title: "",
    description: "",
    body: "",
    tagList: []
  };

  handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.token)
      },
      body: JSON.stringify({
        article: this.state
      })
    })
      .then(res => res.json())
      .then(article => {
        // this.setState(article.articles);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    let { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <div className="form-container">
          <form className="form-section">
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Enter title"
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="description"
              value={this.state.description}
              placeholder="What is the article about?"
              onChange={this.handleChange}
            ></input>
            <textarea
              name="body"
              value={this.state.body}
              placeholder="Type your article here"
              onChange={this.handleChange}
            ></textarea>
            <input
              type="text"
              name="tagList"
              value={this.state.tagList}
              placeholder="Enter tags..."
              onChange={this.handleChange}
            ></input>
          </form>
          <div>
            <button
              className="form-btn"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default NewArticle;
