import React from 'react';
//CSS you must specify file type due to we arent in a CSS file so it doesnt assume the file type
import './App.css';
//JS you dont have to reference theh file type. 
import Header from './Header';
import Main from './Main';
import Data from './data.json'
// import Footer from './Footer';

//must have import react
//must have export 
//declares class 
class App extends React.Component {

  render(){
    return(
      <>
      <h1>Testing we cant go live here!</h1>
      <Header/>
      <Main data={data}/>
      <Footer/>
      </>
   )
  }
}

export default App;

//when you clone someones file down from github you will need to run "npm install" to install the "node_modules:" the node modules consist of code that others have written.

//npm start is what is used to launch your React files just as live server in VS Code.
