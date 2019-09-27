import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

export class Aside extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h3>Popular Tags</h3>
          </div>
          <div>
            <Badge pill variant="secondary">
              Tag
            </Badge>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
