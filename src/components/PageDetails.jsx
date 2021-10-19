import React, { useState, useEffect} from "react";
import { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import './PageDetails.css'
import {fetchProducts} from '../actions'
import {useSelector, useDispatch} from 'react-redux'


const PageDetails =()=>{

  const dispatch = useDispatch()

 {/*
const allProducts = useSelector(state => state.products.all_products)
console.log(allProducts)


*/} 

useEffect(()=>{
  dispatch(fetchProducts())
},[])



{/*
state = {
    artworks: [], //arts will come here
  };


*/}
  
  /*{componentDidMount() {
    this.fetchArtworks();
  }
 */

  {/* 
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
  };*/}
  
  
    return (
    {/*  <div>

        
         <h5>Find some of our best products</h5>
        <Row>
        
        {
          allProducts?.map((artwork) => {
            return (
              <Col sm="3" className = "mb-4 mycards">
                <Card >
                  <Card.Img variant="top" src={artwork.thumbnail.lqip} width = "50px" height = "300px" />
                  <Card.Body>
                    <Card.Title className="card-title">{artwork.title}</Card.Title>
                  </Card.Body>
                  <div>
                  <Button className="mr-5 ml-0 mb-3"    variant="info">Add to cart</Button>
                  <Button className ="mr-0 ml-5 mb-3" variant="info" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></Button>

                  </div>
                  
                </Card>
              </Col>
            );
          })}
      </Row>
        
       
      </div>
        */}
    );
  }


export default PageDetails;