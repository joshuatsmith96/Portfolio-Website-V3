// import { useState } from 'react';

interface Props {
  id?: string;
  color: Number;
  width: any;
  height: any;
  top?: any;
  bottom?: any;
  left?: any;
  right?: any;
  delay?: any;
  movement?: any;
  opacity?: any;
  zindex?: any;
}


function Circle(props: Props) {
  // ------------------------------- VARIABLES -------------------------------------- //

  let id = props.id;
  let width = props.width;
  let height = props.height;
  let top = props.top;
  let bottom = props.bottom;
  let left = props.left;
  let right = props.right;
  let delay = props.delay;
  let movement = props.movement;
  let opacity = props.opacity;
  let zindex = props.zindex;

  //------------------------------------------------------------------------------------//

  //---------STYLES-------------
  //Color
  let color;
  if (props.color === 1) {
    color = "#326bbb";
  } else if (props.color === 2) {
    color = "#2256A3";
  } else if (props.color === 3) {
    color = "#173767";
  } else if (props.color === 4) {
    color = "#10284A";
  }

  //Main Style
  let circleStyles = {
    width: width,
    height: height,
    backgroundColor: color,
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    animationDelay: delay,
    animationName: movement,
    opacity: opacity,
    zIndex: zindex
  };

  return <div className="Circle" id={id} style={circleStyles} onClick={(e) => {console.log(e)}}></div>;
}

export default Circle;
