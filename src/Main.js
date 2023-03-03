import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {

  render() {

    let hornedBeast = this.props.data.map((beast) => {
      return(
      <HornedBeast
        name={beast.title}
        imagURL={beast.image_url}
        keyword={beast.keyword}
        description={beast.description}
        handleOpenModal={this.props.handleOpenModal}
        key={beast._id}
      />)

  });
return(

<>
  <main>
    {hornedBeast}
  </main>
      
      </>
    )
  };
}
//     return (
//       <>
//         <h2>Animal Type</h2>

//         <HornedBeast

//           title={"this.props.title"}
//           image_url={"this.props.imgURL"}
//           description={"this.props.description"}
//         />
//         <HornedBeast

//           title={"this.props.title"}
//           image_url={"this.props.imgURL"}
//           description={"this.props.description"}
//         />
//       </>


//     )
//   }
// }

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