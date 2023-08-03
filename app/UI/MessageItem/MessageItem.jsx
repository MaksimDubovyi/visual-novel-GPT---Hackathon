import React from "react";
import classes from './MessageItem.module.css';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {


    return (
    
        <div >
        <p className={classes.MessageItemName}>{this.props.userName}:</p> <h1 className={classes.MessageItemH1}>{this.props.item.name}</h1>
        <div><img className={classes.MessageItemImg} src={this.props.item.img}></img></div>
        <p className={classes.MessageItemP}>{this.props.item.p}</p> 
        </div>
    );
  }
}

export default MessageItem;
