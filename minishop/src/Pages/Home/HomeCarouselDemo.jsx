import Carousel from "react-bootstrap/Carousel";
import { useToast, Button } from "@chakra-ui/react";

import "./HomeCarouselDemo.css"

function HomeCarouselDemo() {
  const toast = useToast();
  return (
    <>
      <Carousel fade={true} slide={false} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block "
            style={{ width: "220vh" }}
            src="https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block "
            style={{  width: "220vh" }}
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_f60dcd57-3f35-4f38-a32f-3f9666996225_1400x.jpg?v=1673538078"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block "
            style={{ width: "220vh" }}
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WSC-Desktop_dad0fc88-3fc8-4ed8-becb-b7901e4b37f4_1400x.jpg?v=1673853393"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </>
  );
}

export default HomeCarouselDemo;