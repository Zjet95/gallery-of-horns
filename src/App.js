import React from 'react';
//CSS you must specify file type due to we arent in a CSS file so it doesnt assume the file type
// JS you dont have to reference theh file type. 
import Header from './Header';
import Main from './Main';
import data from './data.json'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap'
import './App.css';

const fName = 'Zach';
const lName = 'Jeter';
//must have import react
//must have export 
//declares class 

//creating to push changes to github 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      beastName: '',
      beastImgURL: '',
      beastDescription: ''
    };
  }

  handleCloseModal = (name) => {
    this.setState({
      showModal: false,
      beastName: name
    });
  }

  handleOpenModal = (name, imagURL, description) => {
    this.setState({
      showModal: true,
      beastName: name,
      beastImgURL: imagURL,
      beastDescription: description
    });
  }

  handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === '1') {
      let newData = data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '2') {
      let newData = data.filter(num => num.horns === 2);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '3') {
      let newData = data.filter(num => num.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (selected === '100') {
      let newData = data.filter(num => num.horns === 100);
      this.setState({
        sortedData: newData
      });
    } else if (selected === 'all') {
      this.setState({
        sortedData: data
      });
    }
  }



  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option>Open this select menu</option>
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>


        <Main data={this.sort.sortedData} handleOpenModal={this.handleOpenModal} />

        <Footer
          fName={fName}
          lName={lName}
        />
        <Modal
          show={this.state.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.beastName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.beastImgURL} alt={this.state.beastName} />
          </Modal.Body>
          <Modal.Footer>
            {this.state.beastDescription}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;

//when you clone someones file down from github you will need to run "npm install" to install the "node_modules:" the node modules consist of code that others have written.

//npm start is what is used to launch your React files just as live server in VS Code.
