import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

export class Tag extends Component {
  render() {
    return (
      <>
        <Badge pill variant="secondary">
          Tag
        </Badge>
      </>
    );
  }
}

export default Tag;
