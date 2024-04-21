import { Carousel } from "react-bootstrap";
import Vid1 from "./videos/deepBreathing.mp4"
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

/* 
    Bootstraps Carousel component uses several parameters to
    display videos. 

    An array of parameters was created to hold values such as the title
    of the video, the ID= and the source of the imported video. 

    the return function is used to then import those parameters into the Carousel 
    component. This proccess allows bootstrap to build the carousel using exsisting
    libraries rather than building the component from scratch

    custom CSS is used to center the carousel on the page

*/
const VideoCarousel = () => {
  const videoProperties = [
    {
      videoKey: 1,
      title: "Video 1",
      src: Vid1,
    },
  ];

  return (
    <div className="App">
      <Carousel style={{width: "50%", margin: "auto"}}>
        {videoProperties.map((video) => {
          return (
            <Carousel.Item key={video.videoKey}>
              <ReactPlayer
                url={video.src}
                pip={true}
                controls={true}
                playing={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
