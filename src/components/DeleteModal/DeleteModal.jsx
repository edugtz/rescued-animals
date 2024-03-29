import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteAnimal } from '../../services/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAnimalsData } from '../../actions/animalActions';
import swal from 'sweetalert';

class DeleteModal extends Component {  
    handleDeleteAnimal = () => {
        return deleteAnimal(this.props.animal.id)
            .then(response => {
                swal({
                    title: response.data.message,
                    icon: "success",
                    timer: 1500
                })
                    .then(() => {
                        return this.props.getAnimalsData()
                        .then(() => {
                            return this.props.toggleDeleteModal(this.props.animal);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    })    
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    render() {
        return (
            <div>
                <Modal isOpen={this.props.deleteModalOpen} toggle={() => this.props.toggleDeleteModal(this.props.animal)}>
                <ModalHeader>Delete animal</ModalHeader>
                <ModalBody>
                    <p>Are you sure you want to delete it?</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.handleDeleteAnimal}>Continue</Button>
                    <Button color="secondary" onClick={() => this.props.toggleDeleteModal(this.props.animal)}>Cancel</Button>
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