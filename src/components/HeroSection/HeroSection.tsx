import Circle from "./Circle";
import "../../AnimationStyles.css";

function HeroSection() {

  return (
    <div className="HeroSection">
      <div id="header-intro">
        <p>Hello, I'm</p>
        <br />
        <h1>Joshua</h1>
      </div>
      <div id="cover">

      </div>
      <div className="AllCircles">
        <Circle
        id={"circ1"}
          color={1}
          width={"80px"}
          height={"80px"}
          top={"10%"}
          right={"10%"}
          delay={".9s"}
          movement={"circleMove2"}
        />
        <Circle
        id={"circ2"}
          color={3}
          width={"160px"}
          height={"160px"}
          top={"60%"}
          left={"-5%"}
          delay={"1s"}
          movement={"circleMove1"}
        />
        <Circle
        id={"circ3"}
          color={4}
          width={"80px"}
          height={"80px"}
          top={"38%"}
          right={"2%"}
          delay={"1.3s"}
          movement={"circleMove3"}
        />
        <Circle
        id={"circ4"}
          color={1}
          width={"200px"}
          height={"200px"}
          top={"-10%"}
          left={"-10%"}
          delay={"1.5s"}
          movement={"circleMove2"}
        />
        <Circle
        id={"circ5"}
          color={2}
          width={"100px"}
          height={"100px"}
          top={"70%"}
          right={"-8%"}
          delay={"1.5s"}
          movement={"circleMove1"}
        />
        <Circle
        id={"circ6"}
          color={2}
          width={"50px"}
          height={"50px"}
          top={"30%"}
          left={"5%"}
          delay={"1.5s"}
          movement={"circleMove3"}
        />
        <Circle
        id={"circ7"}
          color={2}
          width={"50px"}
          height={"50px"}
          top={"45%"}
          left={"45%"}
          delay={"1.5s"}
          movement={"circleMove2"}
        />
        <Circle
          id={"circ8"}
          color={3}
          width={"10px"}
          height={"10px"}
          top={"20%"}
          left={"40%"}
          delay={"1.5s"}
          movement={"circleMove1"}
        />
      </div>

      <div className="arrow"></div>
    </div>
  );
}

export default HeroSection;
