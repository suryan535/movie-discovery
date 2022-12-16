import React from "react";
import classes from "./Modal.module.css";
import CloseIcon from "../../assets/close.png";

const Modal=(props)=>
{
  return(
    <div className={classes.outer}>
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.topHeading}>
                    {props.data['original_title']}
                </div>
                <div className={classes.topClose}>
                    <img src={CloseIcon}
                    alt="Image Not Found"
                    onClick={()=>props.modalCloser()}></img>
                </div>
            </div>
            <div className={classes.content}>
              <div className={classes.left}>
              <img style={{width:"266px",
            height:"389px"}}
            src={props.data.image}
            alt="Image Not Found"
            ></img>
              </div>
              <div className={classes.right}>
                <div className={classes.description}>
                  <b>Release Date:</b> {props.data["release_date"]}
                </div>
                <div className={classes.description}>
                  {props.data['overview']}
                </div>
                <div className={classes.description}>
                  <b>{props.data['vote_average']}</b> /10 &#40;{props.data['vote_count']} total votes&#41;
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Modal;