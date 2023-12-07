function AboutMe() {
  return (
    <div className="aboutMeContainer">
      <section id="about-me-image-and-title">
        <div className="reveal aboutMe">
          <h1 id="about-me-header1">A little about me</h1>
          <div id="profile-image"></div>
        </div>
      </section>
      <section id="about-me-info">
        <div className="reveal aboutMe">
        <h1 id="about-me-header2">A little about me</h1>
          <p>
            My name is Joshua Smith! I am a Web Designer and Developer, US Army Veteran, and avid cheese eater. This is just some filler text until I figure out what to put here (my wife told me lorem ipsum gives her a mild stroke).
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
