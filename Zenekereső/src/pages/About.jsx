import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>{"About This App"}</h1>
      <p>
        <strong>{"This application is a music search tool that allows you to find copyright-free music in two ways "}</strong>
      </p>
      <ul>
        <li>
          {"Search by default: Simply enter a keyword or phrase related to the kind of music you're looking for, and the app will search for relevant copyright-free music."}
        </li>
        <li>
          {" Upload through file"}
          {": Upload an audio file of an existing song you'd like to identify. The app will use an audio fingerprinting technology to match the file with our database of copyright-free music through an API call to "}
          <a href="https://www.acrcloud.com/" target="_blank" rel="noopener noreferrer">
            {"ACRCloud. "}
          </a>
        </li>
      </ul>
      <p>
        {"All the music you can find and discover through this app is royalty-free, meaning you can use it freely for your projects without worrying about copyright restrictions."}
      </p>
      <p>
        {"Icon Attribution: The music icon used in this application is from Freepik and was created by "}
        <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">
          {"Freepik. "}
        </a>
      </p>
      <p className='p-0'>
        <a
          href="https://www.flaticon.com/free-icon/music_2402461?term=music&page=1&position=12&origin=tag&related_id=2402461"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" Icon link "}
        </a>
      </p>
    </div>
  );
};

export default About;
