import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    componentDidMount(){
        console.log('componentDidMount');
        this.props.getItems();
        // console.log("@@@@@ HELLO @@@@")
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render(){
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick = {this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    } // end of render(){
} // end of class ShoppingList

// This is for the purpose of validation of ShoppingList's props
ShoppingList.propTypes = {
    // getItems is from actions/itemActions, which ia mapped to
    // ShoppingList as a prop
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
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

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList)