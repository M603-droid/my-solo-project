import React from "react";

import { Button, Nav, Spinner, Card } from "react-bootstrap";
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

    <div>
        
            {favorites.map((favorite, i) => (
                <Card key={i} className="sleepcard2 px-0">
                    <Card.Img
                  variant="top"
                  className="rounded-0"
                 src="https://c4.wallpaperflare.com/wallpaper/837/935/755/foggy-huawei-mate-10-morning-mountains-wallpaper-preview.jpg" height= "100px" width="50px"
                  id="sleepcardimg"
          />
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>

                <button className="text-white" className="favcardlink"
                      style={{ cursor: "pointer" }}
                      onClick={() => productFromFavorite(i)}
                      >  remove
           </button>
         </Card>
        ))
            }
            

    </div>
            
  )
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Favorites);
      