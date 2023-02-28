import React from 'react';

const fName = "Zach";
const lName = 'Jeter';


class Header extends React.Component {
  render() {
    return (
      <>
        <h1>
          <title>Hello My Name is {`${fName} ${lName}`}!</title>
        </h1>
        </>
    );
  }
};

export default Header;

