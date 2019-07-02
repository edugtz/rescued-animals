import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAnimalsData } from '../../actions/animalActions';
import { updateAnimal } from '../../services/api';
import swal from 'sweetalert';
import './EditModal.scss';

class EditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            animalId: null,
            name: '',
            species: '',
            breed: '',
            age: null,
            color: '',
            location: ''
        };
    };

    static getDerivedStateFromProps(props, state) {
        if (props.animal.id !== state.animalId) {
            return {
                animalId: props.animal.id,
                name: props.animal.name,
                species: props.animal.species,
                breed: props.animal.breed,
                age: props.animal.age,
                color: props.animal.color,
                location: ((props.animal || {}).animalDetail || {}).location
            };
        }
    
        return null;
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleFileUpload = (e) => {
        const file = e.target.files[0];

        this.setState({ selectedFile: file });
    };

    handleEditAnimal = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const updatedAnimalData = {
            name: this.state.name,
            species: this.state.species,
            breed: this.state.breed,
            age: this.state.age,
            color: this.state.color,
            location: this.state.location
        };

        if (this.state.selectedFile) {
            updatedAnimalData.image = this.state.selectedFile;
        }

        for(let [key, value] of Object.entries(updatedAnimalData)) {
            formData.append(key, value);
        };

        return updateAnimal(this.state.animalId, formData)
            .then(response => {
                swal({
                    title: response.data.message,
                    icon: "success",
                    timer: 2000
                })
                    .then(() => {
                        return this.props.getAnimalsData()
                            .then(() => {
                                return this.props.toggleEditModal(this.props.animal);
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        // this.setState({ redirect: true })
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { name, species, age, color, breed, location } = this.state;

        return(
            <div>
                <Modal isOpen={this.props.editModalOpen} toggle={this.props.toggleEditModal}>
                    <ModalHeader>Edit animal</ModalHeader>
                    <ModalBody>
                        {this.state.animalId && 
                            <form className="animal-edit">
                                <div className="form-group row">
                                    <label htmlFor="animal-name" className="col-sm-2 col-form-label animal-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={name} 
                                            name="name" 
                                            id="animal-name" 
                                            placeholder="Oliver" 
                                            onChange={this.handleInputChange}    
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="animal-species" className="col-sm-2 col-form-label animal-form-label">Species</label>
                                    <div className="col-sm-10">
                                        <select name="species" 
                                            id="animal-species" 
                                            className="form-control"
                                            value={species}
                                            onChange={this.handleInputChange}
                                        >
                                            <option value="Dog">Dog</option>
                                            <option value="Cat">Cat</option>
                                            <option value="Fish">Fish</option>
                                            <option value="Reptile">Reptile</option>
                                            <option value="Bird">Bird</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="animal-breed" className="col-sm-2 col-form-label animal-form-label">Breed</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="breed" 
                                            id="animal-breed" 
                                            placeholder="Bulldog" 
                                            value={breed}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="animal-color" className="col-sm-2 col-form-label animal-form-label">Color</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="color" 
                                            id="animal-color" 
                                            placeholder="White" 
                                            value={color}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="animal-age" className="col-sm-2 col-form-label animal-form-label">Age</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="age" 
                                            id="animal-age" 
                                            placeholder="1" 
                                            value={age}
                                            onChange={this.handleInputChange}    
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="animal-location" className="col-sm-2 col-form-label animal-form-label">Location</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="location" 
                                            id="animal-location" 
                                            placeholder="Guadalajara" 
                                            value={location}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="animal-location" className="col-md-2 col-form-label animal-form-label">Picture</label>
                                    <div className="col-sm-10 custom-file">
                                        <input onChange={this.handleFileUpload} type="file" name="animalPicture" className="custom-file-input" />
                                        <label className="custom-file-label custom-size">Choose file...</label>
                                    </div>
                                </div>
                                <b>Note: Uploading another picture will delete previous one</b>
                            </form>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleEditAnimal}>Update</Button>
                        <Button color="secondary" onClick={() => this.props.toggleEditModal(this.props.animal)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
        </div>
        );
    }
};

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
)(EditModal);