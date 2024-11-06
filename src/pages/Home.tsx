1//Styles
import '../App.css'
import "../PageScrollStyles.css"
//Scripts
import { useEffect, useState } from 'react'
import { Parallax, Background } from 'react-parallax'
//Sections
// import HeroSection from '../components/HeroSection/HeroSection'
import HeroSectionV2 from '../components/HeroSectionV2/HeroSectionV2.tsx'
import AboutMe from '../components/AboutMe.tsx'
import MySkills from '../components/MySkills.tsx'
import Experience from '../components/ExperienceSection/Experience.tsx'
import ViewResume from '../components/ViewResume.tsx'
import ContactForm from '../components/ContactForm.tsx'
import Footer from '../components/Footer.tsx'
import ProjectSection from '../components/ProjectSection/ProjectSection.tsx'
//Images
import BackgroundImageMobile from '../assets/Images/Background V3.jpg'

function Home() {


  //calling api
const [list, setList] = useState([])

//Seperate List Data Into Useable Segments

useEffect(() => {
    fetch('http://localhost:1337/api/landing-pages')
    .then((response) => response.json())
    .then((data) => doSomething(data))
}, [])

const doSomething =(data:[]) => {
  console.log(data)
}

//end calling api

  // function isInViewport(element:any) {
  //   var rect = element.getBoundingClientRect();
  //   var html = document.documentElement;
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || html.clientHeight) &&
  //     rect.right <= (window.innerWidth || html.clientWidth)
  //   );
  // }

  // let image = document.getElementById("profile-image")

  // document.addEventListener("scroll", (event:any) => {
  //   if(isInViewport(image) === true){
  //     console.log("In View")
  //   } else {
  //     console.log("Not In View")
  //   }
  // })

  return (
    <div className='Home'>
      <HeroSectionV2></HeroSectionV2>
      <Parallax strength={1000}>
        <Background className="custom-bg">
            <img src={BackgroundImageMobile} alt="fill murray" />
        </Background>
        <AboutMe/>
        <MySkills/>
        <Experience />
        <ProjectSection />
        <ViewResume />
        <ContactForm />
        <Footer />
        <div className="Spacer"></div>
    </Parallax>
    </div>
  )
}

export default Home