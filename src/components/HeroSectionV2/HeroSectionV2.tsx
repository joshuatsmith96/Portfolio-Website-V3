import "../../AnimationStyles.css";

function HeroSectionV2() {


  function letterClicked(e:any){
    //Return all to default classes
    let allSpans = document.getElementById("header-intro")!.children[0].children
    for(let i=0; i<allSpans.length; i++){
      allSpans[i].setAttribute('class', 'goup')
    }

    e.target.setAttribute("class", "goup")
    e.target.setAttribute("class", "goup spin")
  }

  return (
    <div className="HeroSection">
      <div id="header-intro">
        <p>
            <span onClick={(e) => letterClicked(e)} className="goup">H</span>
            <span onClick={(e) => letterClicked(e)} className="goup">e</span>
            <span onClick={(e) => letterClicked(e)} className="goup">l</span>
            <span onClick={(e) => letterClicked(e)} className="goup">l</span>
            <span onClick={(e) => letterClicked(e)} className="goup">o</span>
            <span onClick={(e) => letterClicked(e)} className="goup">, </span>
            <span onClick={(e) => letterClicked(e)} className="goup">I</span>
            <span onClick={(e) => letterClicked(e)} className="goup">'</span>
            <span onClick={(e) => letterClicked(e)} className="goup">m</span>
        </p>
        <br />
        <div className="wrapper nine">
        <div>
            <h1 className="rotate">
                <span>J</span>
                <span>O</span>
                <span>S</span>
                <span>H</span>
                <span>U</span>
                <span>A</span>
            </h1>
        </div>
    </div>
      </div>
      <div className="AllCircles">
      </div>

      <div className="arrow"></div>
    </div>
  );
}

export default HeroSectionV2;
