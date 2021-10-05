import React from "react";
import { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

class Home extends Component {
  state = {
    artworks: [], //arts will come here
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArtworks();
  }

  fetchArtworks = async () => {
    try {
      const response = await fetch(`https://api.artic.edu/api/v1/artworks`);
      if (response.ok) {
        const artworks = await response.json();
        this.setState({ artworks: artworks }, () =>
          console.log(this.state.artworks.data)
        );
      } else {
        alert("Some error happened. No movies fetched");
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Row>
        <Col sm-4>
          <Card>
            <Card.Img variant="top" src={this.props.image_id} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.alt_text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Home;
