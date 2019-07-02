import React, { Component } from 'react';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import moment from 'moment';
import './Manage.scss';
import DeleteModal from '../../components/DeleteModal';
import EditModal from '../../components/EditModal';

class Manage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animal: null,
            deleteModalOpen: false,
            editModalOpen: false
        };
    };

    toggleDeleteModal = (animal) => {
        this.setState(prevState => ({
            deleteModalOpen: !prevState.deleteModalOpen,
            animal
        }));
    };

    toggleEditModal = (animal) => {
        this.setState(prevState => ({
            editModalOpen: !prevState.editModalOpen,
            animal
        }));
    };

    render() {
        const { animals } = this.props;
        return(
            <div className="container manage-animals-container">
                {this.state.animal && Object.keys(this.state.animal).length > 0 &&
                    <DeleteModal 
                        deleteModalOpen={this.state.deleteModalOpen}
                        toggleDeleteModal={this.toggleDeleteModal}
                        animal={this.state.animal}   
                    />
                }
                {this.state.animal && Object.keys(this.state.animal).length > 0 &&
                    <EditModal 
                        editModalOpen={this.state.editModalOpen}
                        toggleEditModal={this.toggleEditModal}
                        animal={(this.state.animal && Object.keys(this.state.animal).length > 0 ) ? this.state.animal : {}}
                    />
                }
                <h1 className="main-title">Manage Animals</h1>
                <div className="animals-table table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Picture</th>
                                <th scope="col">Name</th>
                                <th scope="col">Species</th>
                                <th scope="col">Breed</th>
                                <th scope="col">Color</th>
                                <th scope="col">Age</th>
                                <th scope="col">Location</th>
                                <th scope="col">Publicated</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animals.length > 0 && animals.map((animal, index) => {
                                return (
                                    <tr key={`${animal.name} - ${animal.id}`}>
                                        <td>{index+1}</td>
                                        <td><img className="animal-table-picture" src={animal.animalDetail.picture} alt=""/></td>
                                        <td>{animal.name}</td>
                                        <td>{animal.species}</td>
                                        <td>{animal.breed}</td>
                                        <td>{animal.color}</td>
                                        <td>{animal.age}</td>
                                        <td>{animal.animalDetail.location}</td>
                                        <td>{moment(animal.animalDetail.publication_date).format('DD/MMM/YYYY')}</td>
                                        <td>
                                            <span className="animal-table-action-icons">
                                                <FontAwesomeIcon 
                                                    className="animal-action-icon edit-action" 
                                                    icon={faEdit} 
                                                    onClick={() => this.toggleEditModal(animal)}     
                                                />
                                                <FontAwesomeIcon 
                                                    className="animal-action-icon delete-action" 
                                                    icon={faTrash} 
                                                    onClick={() => this.toggleDeleteModal(animal)}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        animals: state.animals.animalList
    };
};

export default connect(
    mapStateToProps,
    null
)(Manage);