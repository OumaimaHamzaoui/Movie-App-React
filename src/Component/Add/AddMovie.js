import React ,{Component}from 'react'
import '../Add/AddMovie.css'
import {Modal,Button,FormControl} from 'react-bootstrap'


class AddMovie extends Component { 
    constructor(props){
        super();
        this.state={
            MovieImg:"",
            MovieName:"",
            rating:"",
        }
    }
    onChangeHandler=event=>{this.setState(
        {
           [event.target.name]:event.target.value 
        }
    )}

    render(){
        console.log(this.state)
        return (
        <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                <Modal.Title>Movie Informations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormControl type="text" placeholder="Enter Movie Name" name="MovieName" onChange={this.onChangeHandler}/>
                <FormControl type="text" placeholder="Enter Movie Image url" name="MovieImg" onChange={this.onChangeHandler}/>
                <FormControl type="text" placeholder="Rate the movie from 1 to 5" name="rating" onChange={this.onChangeHandler}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.close}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                        this.props.close() ;
                     this.props.addNewMovie(this.state)}}>
                    Add The Movie
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    }
}

export default AddMovie 