import React from 'react';
import './RegistrationForm.scss';

const RegistrationForm = props => {
    return(
        <form className="animal-registration" onSubmit={props.onAnimalRegistration}>
            <div className="form-group row">
                <label htmlFor="animal-name" className="col-sm-2 col-form-label animal-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="animalName" id="animal-name" placeholder="Oliver" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="animal-species" className="col-sm-2 col-form-label animal-form-label">Species</label>
                <div className="col-sm-10">
                    <select name="animalSpecies" id="animal-species" className="form-control">
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
                    <input type="text" className="form-control" name="animalBreed" id="animal-breed" placeholder="Bulldog" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="animal-color" className="col-sm-2 col-form-label animal-form-label">Color</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="animalColor" id="animal-color" placeholder="White" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="animal-age" className="col-sm-2 col-form-label animal-form-label">Age</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="animalAge" id="animal-age" placeholder="1" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="animal-location" className="col-sm-2 col-form-label animal-form-label">Location</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="animalLocation" id="animal-location" placeholder="Guadalajara" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="animal-location" className="col-sm-2 col-form-label animal-form-label">Share a pic</label>
                <div className="col-sm-10 custom-file">
                    <input onChange={props.handleFileUpload} type="file" name="animalPicture" className="custom-file-input" />
                    <label className="custom-file-label custom-size">Choose file...</label>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12 text-center">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
    );
};

export default RegistrationForm;