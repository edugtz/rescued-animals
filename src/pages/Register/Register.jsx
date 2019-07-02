import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { Redirect } from 'react-router-dom';
import { registerAnimal } from '../../services/api';
import swal from 'sweetalert';
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
        const { name, species, breed, color, age, location } = formValues;

        const formData = new FormData();

        if(!name.value || !species.value || !breed.value || !color.value || !age.value || !location.value ) {
            swal({
                title: "Please verify fields, some of them might be empty",
                icon: "warning",
                timer: 3000
            });

            return;
        }

        const animalData = {
            name: formValues.name.value,
            species: formValues.species.value,
            breed: formValues.breed.value,
            color: formValues.color.value,
            age: formValues.age.value,
            location: formValues.location.value,
            image: this.state.selectedFile
        };

        for(let [key, value] of Object.entries(animalData)) {
            formData.append(key, value);
        };

        return registerAnimal(formData)
            .then(response => {
                swal({
                    title: response.data.message,
                    icon: "success",
                    timer: 2000
                })
                    .then(() => {
                        this.setState({ redirect: true })
                    });
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