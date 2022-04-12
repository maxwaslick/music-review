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

class ratingModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}> Ratings </ModalHeader>
                <ModalBody>
                    <Form>
                        <p> Song: {this.state.activeItem.song} </p>
                        <p> Artist: {this.state.activeItem.artist} </p>
                        <FormGroup>
                            <Label for="rating">Rating </Label>
                            <Input
                                type = "number"
                                name = "rating"
                                value={this.state.activeItem.rating}
                                onChange={this.handleChange}
                                placeholder="Enter New Rating"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

export default ratingModal