import "./Home.css";
import Img from "../../img/announcements.jpg";

function Home() {
  return (
    <>
      <div class="block"></div>
      <div className="main">
        <div class="slogan_container">
          <h2 class="slogan">We Provide Best Announcement Service</h2>
          <br />
          <p class="ad_text">
            {" "}
            Step into a world of endless possibilities with our cutting-edge
            announcement service! Whether you're promoting your event, selling
            your belongings, or searching for your next adventure, we've got you
            covered. Our intuitive platform offers seamless navigation and
            powerful search capabilities, making it easier than ever to connect
            with your audience. With a vibrant community of users and a
            user-friendly interface, you can trust us to elevate your
            announcements to new heights. Join us today and experience the
            difference for yourself!
          </p>
          <img src={Img} class="intro-img" />
        </div>
      </div>
      <span class="home_circle"></span>
      <span class="home_circle_2"></span>
      <span class="home_circle_3">&#9675;</span>
      <span class="star"></span>
    </>
  );
}

export default Home;
