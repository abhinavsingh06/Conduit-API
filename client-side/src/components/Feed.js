import React from "react";
import Card from "react-bootstrap/Card";

export default function Feed(props) {
  return (
    <>
      <div className="feed-container">
        <div>
          <h6>Global Feed</h6>
        </div>
        <div>
          <ul>
            {props.articles &&
              props.articles.map(article => (
                <li>
                  <Card style={{ width: "50rem" }}>
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>{article.description}</Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">{article.author.username}</Card.Link>
                    </Card.Body>
                  </Card>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
