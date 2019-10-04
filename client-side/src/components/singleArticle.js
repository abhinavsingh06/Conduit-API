import React, { Component } from "react";

export class singleArticle extends Component {
  state = {
    article: {},
    comments: [],
    body: "",
    user: ""
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    fetch(`https://conduit.productionready.io/api/articles/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(({ article }) => this.setState({ article: article }));
    fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(comments => {
        console.log(comments.comments);
        this.setState({ comments: comments.comments });
      });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return <div>singlearticle</div>;
  }
}

export default singleArticle;
