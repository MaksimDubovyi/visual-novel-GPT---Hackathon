import React from "react";
import classes from './StyleItem.module.css';
//className={classes.StyleItemImg}

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
   
  }

  
   Click = (e) => {
    e.preventDefault();
    this.props.setStyleItem(this.props.item); };

  render() {


    return (
        <div onClick={this.Click}>
        <h1 className={classes.StyleItemH1}>{this.props.item.name}</h1>
        </div>
    );
  }
}

export default StyleItem;
