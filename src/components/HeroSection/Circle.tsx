import { useState } from 'react';

interface Props{
    id?: string,
    color: Number,
    width: any,
    height: any,
    top?: any,
    bottom?: any,
    left?: any,
    right?: any,
    delay?: any,
    movement?: any
}

function Circle(props: Props){

    const [newOpacity, setNewOpacity] = useState("0")

    window.addEventListener("load", () => {
        setNewOpacity("1")
    });

    //---------STYLES-------------
    //Color
    let color;
    if(props.color === 1){
        color = "#326bbb"
    } else if (props.color === 2){
        color = "#2256A3"
    } else if (props.color === 3){
        color = "#173767"
    } else if (props.color === 4){
        color = "#10284A"
    }

    //Main Style
    let circleStyles = {
        width: props.width,
        height: props.height,
        backgroundColor: color,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        animationDelay: props.delay,
        animationName: props.movement,
        opacity: newOpacity
    }

    return(
        <div className="Circle" id={props.id} style={circleStyles} onClick={(e) => {console.log(e.target)}}></div>
    )
}

export default Circle;