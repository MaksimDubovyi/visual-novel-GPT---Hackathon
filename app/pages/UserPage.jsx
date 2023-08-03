import React from 'react';


class UserPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
     
  let display = "none";
  if (this.props.ifExit) {
    display = "block";
  }
    return (
    
      <div className="row"  >
         <h1 style={{marginLeft:"50% ", marginTop:"20%"}}> Visual Novel</h1>
      </div>
    );
  }
}

export default UserPage;
