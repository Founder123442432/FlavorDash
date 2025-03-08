import SecondSection from "../Components/home-ui/Scondsection";
import Hero from "../Components/home-ui/hero";
import FirstSection from "../Components/home-ui/section1";
import Section3 from "../Components/home-ui/section3";
import Reviews from "../Components/home-ui/section4";
import useTopScroling from "../customHooks/topScroling";
export default function Home() {
  useTopScroling();
  return (
    <>
      <Hero />
      <FirstSection
        h1="Our Flavors"
        h1span="Your Favorites"
        p="From sizzling appetizers to mouthwatering desserts, we have something for everyone. Explore our carefully curated menu featuring a fusion of cuisines that cater to all palates. Freshly made, always satisfying!"
        reverse={true}
      />
      <FirstSection
        h1="Fresh, Delicious,"
        h1span=" Delivered!"
        p="Hungry? Let us take care of that. Our kitchen serves up flavorful, chef-crafted dishes using the freshest ingredients, all brought straight to your door. Whether it’s a quick lunch, a family dinner, or a late-night craving, we’ve got you covered!"
        reverse={false}
      />
      <SecondSection />
      <Section3 />
      <Reviews />
    </>
  );
}
