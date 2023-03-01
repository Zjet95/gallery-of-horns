import React from 'react';

const fName = "Zach";
const lName = 'Jeter';


class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Hello My Name is {fName} {lName}!</h1>
        </header>
      </>
    );
  }
};

export default Header;

// To kill a port thats currently open displaying a react app use npx kill-port (Whatever port)

