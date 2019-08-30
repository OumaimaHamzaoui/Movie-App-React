import React from 'react'
import '../Movie/Movie.css'
import { Container,Row,Col} from 'react-bootstrap' 
import StarRatingComponent from 'react-star-rating-component';

function Movie(props) {
    return (
        <div>
            <Container className="Container">
                <Row>
                    <Col className="rating-movie" md={{span:5,offset:7}}>
                        <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={props.rating}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src={props.MovieImg} className="MovieImg"/>
                    </Col>
                </Row>
                <Row>
                    <Col  >
                    <h5>{props.MovieName}</h5>
                    </Col>
                </Row>
            </Container>

            
        </div>
    )
}

export default Movie
