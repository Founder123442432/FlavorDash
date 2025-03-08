import LearnMoreButton from "../buttons/learnmoreb";
import et1 from "/src/assets/imgs/at1.jpg";
import et2 from "/src/assets/imgs/et2.jpg";
import et3 from "/src/assets/imgs/et3.jpg";
export default function Ausecondsection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mr-6 ">
                <img className="rounded-2xl w-[500px]" src={et1} />
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                It All Began With a Passion for Great Food{" "}
              </h2>
              <p className="leading-relaxed">
                Our journey started with a simple idea: to share our love for
                delicious, high-quality food with our community. What began as a
                small kitchen has grown into a dedicated team of culinary
                experts committed to bringing people together over meals that
                excite and inspire.
              </p>
              <LearnMoreButton bg="black" text="white" />
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mr-6 ">
                <img className="rounded-2xl w-[450px]" src={et2} />
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Bringing People Together Through Flavor{" "}
              </h2>
              <p className="leading-relaxed">
                Food has a magical way of connecting people, and that’s what
                drives us every day. We pour our heart into every dish,
                combining timeless recipes with modern twists to create flavors
                that spark joy and create memories, one bite at a time.{" "}
              </p>
              <LearnMoreButton bg="black" text="white" />
            </div>
          </div>
          <div className="py-8  flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mr-6 ">
                <img className="rounded-2xl w-[500px]" src={et3} />
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                A Commitment to Quality and Community
              </h2>
              <p className="leading-relaxed">
                We’re more than just a food delivery service—we’re part of the
                community. From sourcing the freshest local ingredients to
                supporting local producers, we’re committed to making a positive
                impact. Every meal we deliver is a celebration of quality, care,
                and connection.{" "}
              </p>
              <LearnMoreButton bg="black" text="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
