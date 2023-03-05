import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'
import './main.css'
import Button from 'react-bootstrap/Button';
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

  handleHeaderClick = () => {
    this.addHeart()
    this.props.handleOpenModal(this.props.name, this.props.imagURL, this.props.description);
  }


  render() {
    return (
      <div>
      <Card>
        
          <article className="beast">
            <h3>{this.props.name}</h3>
            <p>{this.state.favorite} greetings</p>
            <div>
            <Button><p onClick={this.handleFavorite}>Click to Favorite!</p></Button>
            </div>
        <img
          src={this.props.imagURL}
          alt={this.props.alt}
          onClick={this.props.addHeart}
        ></img>
      </article>
      </Card>
      </div>
    );
  }
}

export default HornedBeast;

//know where you parent and children elements are.
