import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'


class Main extends React.Component {

  render() {

    let hornedBeast = [];
    this.props.data..forEach((pep)=> {
      hornedBeast.push (
        <

      )
    });
    return (
      <>
        <h2>Animal Type</h2>

        <HornedBeast

          title={"this.props.title"}
          image_url={"this.props.imgURL"}
          description={"this.props.description"}
        />
        <HornedBeast

          title={"this.props.title"}
          image_url={"this.props.imgURL"}
          description={"this.props.description"}
        />
      </>


    )
  }
}

export default Main;


   // console.log(this.props.name);
    // let people = [];
    // this.props.data.forEach((pep) => {
    //   people.push(
    //     <Person 
    //     name={pep.name}
    //     imageURL={pep.image.props}
    //   )
    // }