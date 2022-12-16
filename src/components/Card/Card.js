import React,{useState} from "react";
import classes from "./Card.module.css";
import AltImage from "../../assets/error.png";

const Card=(props)=>
{
    
    const [image,setImage]=useState(
        `https://image.tmdb.org/t/p/w500${props.data['backdrop_path']}`
    );
    
    const handlerDefaultImage=()=>
    {
        setImage(AltImage);
    }

    return(
     <div className={classes.outer}
     onClick={()=>props.modalOpener(props.data,image)}>
        <div className={classes.rating}>
            {props.data["vote_average"]}
        </div>
        <div className={classes.top}>
            <img style={{width:"100%",
            height:"302px",
        backgroundImage:AltImage}}
            src={image}
            alt="Image Not Found"
            onError={handlerDefaultImage}
            ></img>
        </div>
        <div className={classes.bottom}>
            {props.data["original_title"]}
        </div>
     </div>
    );
};

export default Card;