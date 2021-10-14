import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllArtworks, addToCart } from '../actions/index'
import { Card, Col, Row, Button } from  'react-bootstrap'
import {addProductToFavorite} from '../actions'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'



const mapStateToProps = (state) => ({
    favorites: state.favorites.favorite_products,
});

const mapDispatchToProps = (dispatch) => ({
    productToFavorite: (product) => dispatch(addProductToFavorite(product)),
});

const AllProducts = ({productToFavorite }) => {
    const params = useParams();
    const [favoritesArray, setfavoritesArray] = useState([]);


    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.all_products)
    console.log(allProducts)

    useEffect(() => {
        dispatch(fetchAllArtworks())
    }, [])

    return (
        <div>
            <Row>

                {
                    allProducts.map((artwork, i) => {
                        return (
                            <Col sm="3" className="mb-4 mycards">
                                <Card >
                                    <Card.Img variant="top" src={artwork} width="50px" height="300px" />
                                    <Card.Body>
                                        <Card.Title className="card-title">{artwork.artist_title}</Card.Title>
                                    </Card.Body>

                                    <button onClick={() => dispatch(addToCart(artwork))}>Add to Cart</button>
                                    <span>price {artwork.internal_department_id} $</span>
                                    <button
                      className="removefavtrackbtn button-light ml-3" 
                      onClick={() => productToFavorite(artwork)}> Add to fav</button>
                    
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllProducts);
  