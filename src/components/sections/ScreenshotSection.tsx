import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ImageCarousel from "components/ImageCarousel";
import Screenshot from "components/Screenshot";
import { SwiperSlide } from "swiper/react";
import image0 from "../../../public/images/phone_slider/zero.png";
import image1 from "../../../public/images/phone_slider/one.png";
import image2 from "../../../public/images/phone_slider/two.png";
import image3 from "../../../public/images/phone_slider/three.png";
import image4 from "../../../public/images/phone_slider/four.png";
import image5 from "../../../public/images/phone_slider/five.png";
import image6 from "../../../public/images/phone_slider/six.png";

const ScreenshotSection = () => {
  return (
    <Section
      sectionId="screenshots"
      className="bg-surface py-10 text-on-surface"
      padding={false}
    >
      <Wrapper>
        <ImageCarousel>
          <SwiperSlide>
            <Screenshot image={image0} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image5} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image6} />
          </SwiperSlide>
        </ImageCarousel>
      </Wrapper>
    </Section>
  );
};

export default ScreenshotSection;
