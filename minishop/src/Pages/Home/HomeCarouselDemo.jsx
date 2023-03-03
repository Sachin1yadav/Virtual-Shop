import Carousel from "react-bootstrap/Carousel";
import "./HomeCarouselDemo.css"
import { TopSlider } from "../../components/Slider";
function HomeCarouselDemo() {
  return (
    <>
      <Carousel fade={true} slide={false} pause={false}>
        {
          TopSlider.map((el,i)=>(
            <Carousel.Item interval={2000} key={i}>
          <img
            className="d-block "
            style={{ width: "220vh" , height:'70vh'}}
            src={el}
            alt="Third slide"
          />
        </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  );
}

export default HomeCarouselDemo;