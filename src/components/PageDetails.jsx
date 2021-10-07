import React from "react";
import { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import './PageDetails.css'


class Home extends Component {
  state = {
    artworks: [], //arts will come here
  };

  componentDidMount() {
    this.fetchArtworks();
  }

  fetchArtworks = async () => {
    try {
      const response = await fetch("https://api.artic.edu/api/v1/artworks");
      if (response.ok) {
        const artworks = await response.json();
        this.setState({ artworks: artworks.data }, () =>
          console.log(this.state.artworks.data)
        );
      } else {
        alert("Some error happened. No movies fetched");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <h5>Find some of our best products</h5>
        <Row>
        
        {this.state.artworks.length > 0 &&
          this.state.artworks.map((artwork) => {
            return (
              <Col sm="3" className = "mb-4 mycards">
                <Card>
                  <Card.Img variant="top" src={artwork.thumbnail.lqip} width = "50px" height = "300px" />
                  <Card.Body>
                    <Card.Title>{artwork.title}</Card.Title>
                  </Card.Body>
                  <Button variant="success">Add to cart</Button>
                </Card>
              </Col>
            );
          })}
      </Row>
      </div>
      
    );
  }
}

export default Home;