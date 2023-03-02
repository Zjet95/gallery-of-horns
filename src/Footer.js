import React from 'react';


class Footer extends React.Component {
  render() {
    return (

        <footer>&copy; {this.props.fName} {this.props.lName} </footer>
      
    );
  }
}

export default Footer;

