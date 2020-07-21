import React, { Component } from 'react';
// import uuid from 'react-uuid';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange =(e) => {
        /** js is different in this as in Python
         * d={xx:11}
         * >{ xx: 11 }
         * key="we"
         * d1={[key]:22}
         * d1
         * { we: 22 }
         * ------------
         * Python would not accept xx - it would be not-defined.
         * But js will see xx as a string 'xx'. If I want to use it the Python
         * way, I have to use [key]:22 as in above.
         * That's why the following usage of [e.target.name]
         */
        this.setState({[e.target.name]: e.target.value});
        // console.log("this.state: ",this.state);
    }

    onSubmit = (e) => {
        // since it is a form, block it to not submit automatically by def.
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }
        // the action addItem from itemActions has been mapped as a prop
        // so here we use it/call it under props.*
        this.props.addItem(newItem);
        // Close
        this.toggle();
    }
    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Item</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add To Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="secondary"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});
/**
 * connect accepts four different parameters, all optional. By convention,
 * they are called:
 *  mapStateToProps?: Function
 *  mapDispatchToProps?: Function | Object
 *  mergeProps?: Function
 *  options?: Object
 *-------------------------------------------
 * the 2nd parm of connect is mapDispatchToProps, and this
 * mapDispatchToProps can be an object or a function returning an object
 * each field of this object should be a function, returning a object
 * that is an "action" which is an object with action.type, and optionally,
 * action.payload
 */
export default connect(mapStateToProps, { addItem })(ItemModal);