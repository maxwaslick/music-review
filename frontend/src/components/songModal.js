import React from "react";
import "./modal.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class songModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    // handleChange = (event) => {
    //     let { name, value } = event.target;
    //     if (event.target.type === "checkbox") {
    //         value = event.target.checked;
    //     }
    //     const activeItem = { ...this.state.activeItem, [name]: value };
    //     this.setState({ activeItem });
    // };
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    };

    // handleSubmit = (event) => {
    //     alert('A song was submitted: ', this.state.activeItem.Rating_song);
    //     fetch('http://localhost:3000/store-data', {
    //         method: 'POST',
    //         body: JSON.stringify(this.state)
    //     }).then(function(response){
    //         console.log(response)
    //         return response.json();
    //     });
    //     event.preventDefault();
    // }

    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}><h3>Add Song</h3> </ModalHeader>
                <ModalBody>
                    <Form>
                        {/* <FormGroup>
                            <Label for="user">Username</Label>
                            <Input 
                                type = "text"
                                name = "user"
                                value={this.state.activeItem.Rating_username}
                                onChange={this.handleChange}
                                placeholder="Enter Username"
                            />
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="song">Song Name</Label>
                            <Input 
                                type = "text"
                                name = "song"
                                value={this.state.activeItem.Rating_song}
                                onChange={this.handleChange}
                                placeholder="Enter Song Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="artist">Artist</Label>
                            <Input
                                type="text"
                                name="artist"
                                value={this.state.activeItem.Rating_artist}
                                onChange={this.handleChange}
                                placeholder="Enter Artist Name"
                            />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="rating">Rating </Label>
                            <Input
                                type = "number"
                                name = "rating"
                                value={this.state.activeItem.Rating_rating}
                                onChange={this.handleChange}
                                placeholder="Enter New Rating"
                            />
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

}
 