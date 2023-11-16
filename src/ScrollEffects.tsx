function ScrollEffects() {
    window.addEventListener("scroll", () => {
        let AllCircles = document.getElementsByClassName("AllCircles")[0].children
        console.log(AllCircles.length)
        for(let i=0; i<AllCircles.length; i++){
            let id = AllCircles[i].id
            let circle = document.getElementById(id);
            circle?.style.top!="0px"
        }
    })
}

export default ScrollEffects;
