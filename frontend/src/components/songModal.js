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

class songModal extends React.Component {
    
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
                <ModalHeader toggle={toggle}> Songs </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="song">Song Name</Label>
                            <Input 
                                type = "text"
                                name = "song"
                                value={this.state.activeItem.song}
                                onChange={this.handleChange}
                                placeholder="Enter Song Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="artist">Artist</Label>
                            <Input
                                type="text"
                                name="artist"
                                value={this.state.activeItem.artist}
                                onChange={this.handleChange}
                                placeholder="Enter Artist Name"
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
        );
    }

}

export default songModal 