import React from 'react';


class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Hello My Name is {this.props.fName} {this.props.lName}! This is The Gallery Of Horns Project</h1>
        </header>
      </>
    );
  }
};

export default Header;

// To kill a port thats currently open displaying a react app use npx kill-port (Whatever port)

