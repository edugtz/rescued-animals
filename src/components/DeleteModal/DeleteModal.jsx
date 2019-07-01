import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteAnimal } from '../../services/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAnimalsData } from '../../actions/animalActions';

class DeleteModal extends Component {  
    handleDeleteAnimal = () => {
        return deleteAnimal(this.props.animal.id)
            .then(response => {
                return this.props.getAnimalsData()
                    .then(() => {
                        return this.props.toggleDeleteModal();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    };
    
    render() {
        return (
            <div>
                <Modal isOpen={this.props.deleteModalOpen} toggle={this.props.toggleDeleteModal}>
                <ModalHeader>Delete animal</ModalHeader>
                <ModalBody>
                    <b>Are you sure you want to delete it?</b>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.handleDeleteAnimal}>Continue</Button>
                    <Button color="secondary" onClick={this.props.toggleDeleteModal}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAnimalsData }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        animals: state.animals.animalList
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteModal);