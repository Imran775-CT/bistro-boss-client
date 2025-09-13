import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import HeroSection from "../HeroSection/HeroSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import ProductCards from "../ProductCards/ProductCards";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
       <Helmet>
              <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <HeroSection></HeroSection>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ProductCards></ProductCards>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
