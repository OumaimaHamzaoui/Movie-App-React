import React from 'react'
import '../header/Header.css'
import {FormControl, Container,Row,Col} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

function Header(props) {
    return (
        <div>
           <Container>
               <Row>
                <Col >
                <FormControl className="search" type="text" placeholder="Search Movie" onChange={props.onChange} />
                </Col>
                <Col >
                <StarRatingComponent className="starrating"
                    name="rate1" 
                    starCount={5}
                    onStarClick={props.onStarClick}
                    />
                </Col>


                </Row>
            </Container>
        </div>
    )
}

export default Header
