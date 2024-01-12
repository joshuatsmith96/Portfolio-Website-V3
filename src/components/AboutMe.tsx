function AboutMe() {

  return (
    <div className="aboutMeContainer">
      <section id="about-me-image-and-title">
        <div className="reveal aboutMe">
          <h1 id="about-me-header1">A little about me</h1>
          <div id="profile-image" className="shadow-fluctuate"></div>
        </div>
      </section>
      <section id="about-me-info">
        <div className="reveal aboutMe">
        <h1 id="about-me-header2">A little about me</h1>
          <p>
            My name is Joshua Smith! I am a Web Designer / Developer, and a U.S. Army Veteran. I have over 6 years of experience in the field of technology in various positions to include IT Support, Network Specialist, Satellite Technician, and Web Manager (with roles such as updating site styles with CSS, or adding functionality with JavaScript).<br/><br/>My favorite part about web development is that you can turn an idea into a functional piece of art. Taking ideas and turning them into realities is what its all about!
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
