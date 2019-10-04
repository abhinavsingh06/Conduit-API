import React, { Component } from "react";

export class singleArticle extends Component {
  state = {
    singleArticle: null,
    comments: []
  };

  componentDidMount() {
    fetch(
      `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(({ articles }) => this.setState({ singleArticle: articles }));
  }
  render() {
    return <div>singlearticle</div>;
  }
}

export default singleArticle;
