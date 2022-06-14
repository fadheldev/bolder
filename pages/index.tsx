import type { NextPage } from "next";
import Company from "../components/Company";
import Feature from "../components/Feature";
import Story from "../components/Story";
import companies from "../fixture/companies.json";

const Home: NextPage = () => {
  return (
    <>
      <main className="w-9/12 mx-auto mt-12">
        <p className="hidden mb-8 text-stone-400 md:block">
          Hello there, Ready to gain new skills?
        </p>
        <div className="mb-8 font-serif text-3xl font-extrabold md:text-5xl text-primary-100">
          <h1>Learn new skills</h1>
          <h1>gain more experience</h1>
        </div>

        <div className="mb-8 text-sm md:text-base text-stone-400">
          <p>
            Build new skills and experience with courses and certificates online
          </p>
          <p>from professional world-class industry companies and startup.</p>
        </div>

        <div className="flex items-center mb-8 text-xs md:text-base">
          <a href="#" className="text-aqua-100">
            Certificates
          </a>
          <div className="w-1 h-1 mx-4 rounded-full bg-stone-400"></div>
          <a href="#" className="text-aqua-100">
            Mentorship
          </a>
          <div className="w-1 h-1 mx-4 rounded-full bg-stone-400"></div>
          <a href="#" className="text-aqua-100">
            Job Advice
          </a>
        </div>

        <button className="h-12 mb-4 font-medium text-white rounded shadow-lg bg-aqua-100 w-44">
          Join for Free
        </button>
        <p className="text-xs md:text-sm text-stone-400">
          *No credit card required.
        </p>
      </main>

      <div className="flex flex-col items-center justify-center w-9/12 mx-auto mt-16">
        <p className="mb-16 text-sm font-semibold md:text-base text-primary-100">
          Collaborate with more than 500+ companies & universities across the
          world
        </p>

        <div className="flex flex-wrap w-full max-w-3xl justify-evenly">
          {companies.data.map((data) => (
            <Company key={data.name} name={data.name} logo={data.logo} />
          ))}
        </div>
      </div>

      <div className="w-full pb-10 mx-auto mt-52 bg-light-200">
        <div className="flex items-center w-11/12 py-4 mx-auto -translate-y-1/2 rounded md:w-9/12 bg-primary-10 justify-evenly">
          <div className="flex flex-col items-center justify-between h-16 text-xs font-semibold text-white md:text-base lg:text-xl">
            <p>800+</p>
            <p>Online Courses</p>
          </div>
          <div className="w-px h-20 bg-white"></div>
          <div className="flex flex-col items-center justify-between h-16 text-xs font-semibold text-white md:text-base lg:text-xl">
            <p>500+</p>
            <p>Expert Instruction</p>
          </div>
          <div className="w-px h-20 bg-white"></div>
          <div className="flex flex-col items-center justify-between h-16 text-xs font-semibold text-white md:text-base lg:text-xl">
            <p>1,200+</p>
            <p>Online Resources</p>
          </div>
        </div>

        <Feature
          header="Accessible Learning"
          title="Find convenient and affordable learning."
          description="Learning with bolder you can access the course on your smartphone
              or computer easily with comfortable experience without the need to
              leave home."
          list={[
            "Live Teaching",
            "Practice and discussion",
            "Animated learning videos",
          ]}
          button="Explore it now"
          image="/images/models/man-with-headphones.jpg"
          alt="Person using the App"
        />
        <Feature
          header="Intensive Learning"
          title="Master new skills with one-one mentorship."
          description="Platform Bolder also provides live streaming video and chat in
          realtime with a mentor that you can record easily and quickly."
          button="Explore it now"
          image="/images/models/woman-taking-notes.jpg"
          alt="Person using the App"
          reverse
        />
      </div>

      <Story
        title="Recommended by Crimson"
        author="William Jacob"
        description="Senior High School - Crimson"
        image="/images/models/boy-in-a-vest.jpg"
        alt="William Jacob"
        secondaryImage="/images/crimson.jpg"
        secondaryAlt="Crimson"
        quote={
          <>
            <span className="font-bold">I recommend Bolder</span> to all the
            students who want to upgrade their skills. It adapts perfectly to
            their needs, even at rapid growth!
          </>
        }
      />

      <div className="flex items-center justify-center py-16 bg-light-400">
        <div className="w-5/6 mx-auto text-center md:w-1/2">
          <h1 className="mb-10 font-serif text-2xl font-bold md:text-4xl text-primary-100">
            Hello, Ready to get started?
          </h1>
          <p className="mb-10 text-sm md:text-base text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ipsam consectetur debitis odit omnis amet harum sed nihil numquam
            cum exercitationem, dolorum eaque, quo vero cupiditate sapiente
            architecto vitae. Aut.
          </p>

          <div className="flex items-center justify-center">
            <button className="mr-10 text-sm font-medium text-white rounded shadow-lg md:text-base h-14 bg-aqua-100 w-44">
              Request a Demo
            </button>
            <button className="text-sm font-medium border rounded shadow-lg md:text-base h-14 text-aqua-100 border-aqua-100 w-44">
              Join for Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
