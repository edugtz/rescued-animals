import React, { Component } from 'react';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import moment from 'moment';
import './Manage.scss';

class Manage extends Component {
    render() {
        const { animals } = this.props;
        return(
            <div className="container manage-animals-container">
                <h1 className="main-title">Manage Animals</h1>
                <table className="table table-hover animals-table">
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
                        {animals.length > 0 && animals.map(animal => {
                            return (
                                <tr key={`${animal.name} - ${animal.id}`}>
                                    <td>{animal.id}</td>
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
                                            <FontAwesomeIcon className="animal-action-icon edit-action" icon={faEdit} />
                                            <FontAwesomeIcon className="animal-action-icon delete-action" icon={faTrash} />
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    </table>
            </div>
        );
    }
};

// export default Manage;

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ getAnimalsData }, dispatch);
// };

const mapStateToProps = (state) => {
    return {
        animals: state.animals.animalList
    };
};

export default connect(
    mapStateToProps,
    // mapDispatchToProps
    null
)(Manage);