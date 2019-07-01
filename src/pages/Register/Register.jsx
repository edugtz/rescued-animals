import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { Redirect } from 'react-router-dom';
import { registerAnimal } from '../../services/api';
import './Register.scss';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            redirect: false
        };
    };

    onAnimalRegistration = (e) => {
        e.preventDefault();
        const formValues = e.target;
        const formData = new FormData();

        const animalData = {
            name: formValues.animalName.value,
            species: formValues.animalSpecies.value,
            breed: formValues.animalBreed.value,
            color: formValues.animalColor.value,
            age: formValues.animalAge.value,
            location: formValues.animalLocation.value,
            image: this.state.selectedFile
        };

        for(let [key, value] of Object.entries(animalData)) {
            formData.append(key, value);
        };

        return registerAnimal(formData)
            .then(response => {
                console.log(response);
                // if(response.data.message === 'Animal successfully registered')
                this.setState({ redirect: true })
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleFileUpload = (e) => {
        const file = e.target.files[0];

        this.setState({ selectedFile: file });
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/'/>;
        }

        return(
            <div className="container form-wrapper">
                <h1 className="main-title">New animal registration</h1>
                <RegistrationForm 
                    onAnimalRegistration={this.onAnimalRegistration} 
                    handleFileUpload={this.handleFileUpload}    
                />
            </div>
        );
    };
};

export default Register;