import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'
import './main.css'
// import Main from 'main';
// import data from './data.json';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
      // learnAboutme: false
    };
  }

  handleFavorite = () => {
    // when the user clicks on "Say Hello" update the value of this.state.waves
    this.setState({
      //must use set state to update a value in state, you cant bypass and update the value directly. 
      favorite: this.state.favorite + 1,
    });
  }

  // favorited = () => {
  //   this.setState({
  //     addHeart: true
  //   });

  // }


  render() {
    return (
      <Card>
        <article className="beast">
          <h3>{this.props.name}</h3>
          <p>{this.state.favorite} greetings</p>
          <p onClick={this.handleFavorite}>Say What's Up!</p>
          <img
            src={this.props.imagURL}
            alt={this.props.alt}
            onClick={this.props.addHeart}
          ></img>
        </article >
      </Card>
    );
  }
}

export default HornedBeast;

//know where you parent and children elements are.
