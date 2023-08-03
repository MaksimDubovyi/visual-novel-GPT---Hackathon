import React from "react"; 
import StyleItem from './StyleItem.jsx';
import classes from './StyleItem.module.css';
import axios from 'axios';
import clasPage from '../../pages/page.module.css';

class StyleList extends React.Component {
  constructor(props) {
    super(props);
  }
 

    Click = (e) => {
    e.preventDefault();
   
    this.props.setStatr( x)
     
 };

  render() {
    let display="none";
    if (this.props.styleItem.img !== "") {
      display = "block";
    }
    return (
      <div className={clasPage.itemPage}>
          <h1 className="textStyleItem">Теми</h1>
       {this.props.styleList.map((item,index) => (
          <StyleItem item={item} key={index+1} setStyleItem={this.props.setStyleItem}/> 
        ))}


      <img style={{ display }} className={classes.StyleItemImg} src={this.props.styleItem.img}></img>
      <p className={classes.StyleItemP}>{this.props.styleItem.p}</p>
      <button className={classes.request__button} style={{ display }} onClick={this.Click}>Обрати</button>
      </div>
    );
  }
}

export default StyleList;
