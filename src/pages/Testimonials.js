import React from "react";
import Testimonial from "../components/TestimonialCard/Testimonial";
import {
   MainContentWrapper,
   ResponsiveGrid,
} from "../components/utils/mainComponents";
import { themeColors } from "../data/appColors";
import { Heading } from "./InfoSection";
import Fade from "react-reveal/Fade";
const Testimonials = () => {
   return (
      <MainContentWrapper
         background={themeColors.page}
         id="testimonial"
         className="section testimonials"
      >
         <Heading>Testimonials</Heading>
         <small>in progress...</small>
         <ResponsiveGrid>
            <Fade top>
               <Testimonial />
            </Fade>
            <Testimonial />
            <Testimonial />
         </ResponsiveGrid>
      </MainContentWrapper>
   );
};

export default Testimonials;
