import React, { useEffect } from 'react';
import MessageList from "../UI/MessageItem/MessageList.jsx"
import StyleList from "../UI/StyleItem/StyleList.jsx"
import classes from './page.module.css';
class AdminPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
     

    return (
      <div className={classes.PageContainer}>
         <MessageList {...this.props}/>
         <StyleList {...this.props}/>
      </div>
    );
  }
}

export default AdminPage;
