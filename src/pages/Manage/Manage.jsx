import React, { Component } from 'react';
import './Manage.scss';

class Manage extends Component {
    render() {
        return(
            <div className="container manage-animals-container">
                <h1 className="main-title">Manage Animals</h1>
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
                        <tr>
                        <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        );
    }
};

export default Manage;