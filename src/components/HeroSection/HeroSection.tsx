import Circle from "./Circle";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div id="header-intro">
        <p>Hello, I'm</p>
        <br />
        <h1>Joshua</h1>
      </div>
      <Circle
        color={1}
        width={"80px"}
        height={"80px"}
        top={"10%"}
        right={"10%"}
        delay={".5s"}
        movement={"circleMove2"}
      />
      <Circle
        color={3}
        width={"160px"}
        height={"160px"}
        top={"60%"}
        left={"-5%"}
        delay={"1s"}
        movement={"circleMove1"}
      />
      <Circle
        color={4}
        width={"80px"}
        height={"80px"}
        top={"38%"}
        right={"2%"}
        delay={"1.3s"}
        movement={"circleMove3"}
      />
      <Circle
        color={1}
        width={"200px"}
        height={"200px"}
        top={"-10%"}
        left={"-10%"}
        delay={"1.5s"}
        movement={"circleMove2"}
      />
      <Circle
        color={2}
        width={"100px"}
        height={"100px"}
        top={"70%"}
        right={"-8%"}
        delay={"1.5s"}
        movement={"circleMove3"}
      />
        <Circle
        color={2}
        width={"50px"}
        height={"50px"}
        top={"30%"}
        left={"5%"}
        delay={"1.5s"}
        movement={"circleMove1"}
      />
      <div className="arrow"></div>
    </div>
  );
}

export default HeroSection;
