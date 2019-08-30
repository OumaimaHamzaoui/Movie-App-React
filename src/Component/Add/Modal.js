import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import AddMovie from './AddMovie'
import '../Add/AddMovie.css'

class Modal extends Component {
 constructor() {
   super();
   this.state={show:false,
    }
 }

   handleClose = () => this.setState({show:false});
   handleShow = () => this.setState({show:true});
    render() {
       
          
            return (
              <div className="addButton">
                <Button variant="primary" onClick={this.handleShow}>
                  Add New Movie
                </Button>
                <AddMovie 
                        show={this.state.show} 
                        close={this.handleClose}
                        addNewMovie={this.props.addNewMovie}
                />
            </div>
                
             
            );
          }
          
        }     

export default Modal
