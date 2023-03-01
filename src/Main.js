import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {

  render() {

    return (
      <>
        <h2>Animal Type</h2>

        <HornedBeast

          title={"Family Of Rhinos"}
          image_url={""}
          description={"Here we display the rare white horned Rhino"}
        />
        <HornedBeast

          title={"Family Of Rhinos"}
          image_url={""}
          description={"Here we display the rare white horned Rhino"}
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