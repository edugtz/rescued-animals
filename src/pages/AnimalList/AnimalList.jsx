import React, { Component } from 'react';
import AnimalCards from '../../components/AnimalCards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAnimalsData } from '../../actions/animalActions';
import './AnimalList.scss';

class AnimalList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedAnimals: false
        };
    };

    componentDidMount() {
        this.props.getAnimalsData()
            .then(() => {
                this.setState({ updatedAnimals: true});
            })
            .catch(err => {
                console.log(err.message);
            });
    };
    
    render() {
        const { animals } = this.props;
        const { updatedAnimals } = this.state;
        return(
            <div className="animals-container">
                {(updatedAnimals && animals.length === 0) && 
                    <div>
                        <h1 className="main-title">We are sorry, we currently dont have animals available for adoption</h1>
                    </div>
                }
                {(updatedAnimals && animals.length > 0) && 
                    <div>
                        <h1 className="main-title">Animals Available For Adoption</h1>
                        <AnimalCards animals={animals} />
                    </div>
                }
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
)(AnimalList);