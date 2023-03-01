import React from 'react';
import Main from 'main';
import data from './data.json';

class HornedBeast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  waves: 0,
  learnAboutme: false
    };
  }

  handleWaves = () => {
    // when the user clicks on "Say Hello" update the value of this.state.waves
    this.setState({
      //must use set state to update a value in state, you cant bypass and update the value directly. 
      waves: this.state.waves + 1,
    });
  }


  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <img
          src={'this.props.imageURL'}
          alt={'this.props.alt'}
          title={'this.props.title'}
        />
        <p>{this.props.description}</p>
      </>

    );
  }
};

export default HornedBeast;
