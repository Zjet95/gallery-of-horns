import React from 'react';
//CSS you must specify file type due to we arent in a CSS file so it doesnt assume the file type
// JS you dont have to reference theh file type. 
import Header from './Header';
import Main from './Main';
import data from './data.json'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const fName = 'Zach';
const lName = 'Jeter';
//must have import react
//must have export 
//declares class 

//creating to push changes to github 
class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     hearts: ''
  //   }
  //   addHearts = () => {
  //     //only way we can update state is to use this method
  //     this.setState({
  //       hearts: this.state.hearts + ''
  //     })
  //   }

  //   handleCloseModal = (name) => {
  //     this.setState({
  //       showModal: false
  //       personName: name
  //     })

  //     handleOpenModal = () => {
  //       this.setState()
  //     });
  //   }

  //   handleHeaderClick = () => {
  //     this.props.handleOpenModal(this.props.name)
  //   }

  render() {
    return (
      <>
        <Header
          fName={fName}
          lName={lName}
        />
        <Main data={data} />

        <Footer
          fName={fName}
          lName={lName}
        />
        {/* <Modal show={this.state.showModal}>
          //   <Modal.Header>
          //     <Modal.Title></Modal.Title>
          //   </Modal.Header>
          // </Modal> */}
      </>
    )
  }
}

export default App;

//when you clone someones file down from github you will need to run "npm install" to install the "node_modules:" the node modules consist of code that others have written.

//npm start is what is used to launch your React files just as live server in VS Code.
