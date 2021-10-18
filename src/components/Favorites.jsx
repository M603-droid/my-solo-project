import React from "react";

import { Button, Nav, Spinner, Card , Row, Col, Container} from "react-bootstrap";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { removeProductFromFavorite } from "../actions";






const mapStateToProps = (state) => ({
    favorites: state.favorites.favorite_products,
});

const mapDispatchToProps = (dispatch) => ({
    productFromFavorite :(i) => dispatch(removeProductFromFavorite(i)),
});

const Favorites = ({ favorites, productFromFavorite }) => {
    const params = useParams();
  
  return(
<Container>
<div>
<Row>
        {favorites.map((favorite, i) => (
         <Col sm="3" className="justify-content-center " >
          <Card key={i} className="mb-4 fav_cards">
                <Card.Img className="fav_image"
              variant="top"
              src={favorite.image} width="50px" height="300px"                  
      />  
      
      <Card.Title className="ml-3"> {favorite.title}</Card.Title>
      <span className="ml-3 mr-auto">price {favorite.price} $</span>
                        <span className="mr-auto ml-3">Rating {favorite.rating.rate} </span>
      

            <button className="favcardlink text-right mr-2 mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => productFromFavorite(i)}
                  >  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className ="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
       </button>
     </Card>
          </Col>
            
    ))
        }
        
        </Row>
</div>
</Container>
    
            
  )
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Favorites);
      