import type { NextPage } from "next";
import { useRouter } from "next/router";
import Company from "../components/Company";
import Feature from "../components/Feature";
import Story from "../components/Story";
import config from "../config/config.json";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <main className="w-9/12 mx-auto mt-12">
        <p className="hidden mb-8 text-stone-400 md:block">
          Hello there, Ready to gain new skills?
        </p>
        <div className="max-w-xs mb-8 font-serif text-3xl font-extrabold md:max-w-lg md:text-5xl text-primary-100">
          {config.slogan}
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

        <button
          onClick={() => router.push("/signup")}
          className="h-12 mb-4 font-medium text-white rounded shadow-lg bg-aqua-100 w-44"
        >
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
          {config.companies.map((data) => (
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

        {config.features.map(
          ({
            header,
            title,
            description,
            list,
            button,
            image,
            alt,
            reverse,
          }) => (
            <Feature
              header={header}
              title={title}
              description={description}
              list={list}
              button={button}
              image={image}
              alt={alt}
              reverse={reverse}
              key={title + header}
            />
          )
        )}
      </div>

      {config.stories.map(
        ({
          title,
          author,
          description,
          image,
          alt,
          secondaryImage,
          secondaryAlt,
          quote,
        }) => (
          <Story
            title={title}
            author={author}
            description={description}
            image={image}
            alt={alt}
            secondaryImage={secondaryImage}
            secondaryAlt={secondaryAlt}
            key={title + author + description}
            quote={
              <>
                <span className="font-bold">{quote.highlighted}</span>{" "}
                {quote.rest}
              </>
            }
          />
        )
      )}

      <div className="flex items-center justify-center py-16 bg-light-400">
        <div className="w-5/6 mx-auto text-center md:w-1/2">
          <h1 className="mb-10 font-serif text-2xl font-bold md:text-4xl text-primary-100">
            {config.jumbotron.title}
          </h1>
          <p className="mb-10 text-sm md:text-base text-neutral-400">
            {config.jumbotron.description}
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={() => router.push(config.jumbotron.buttons.first.link)}
              className="mr-10 text-sm font-medium text-white rounded shadow-lg md:text-base h-14 bg-aqua-100 w-44"
            >
              {config.jumbotron.buttons.first.text}
            </button>
            <button
              onClick={() => router.push(config.jumbotron.buttons.second.link)}
              className="text-sm font-medium border rounded shadow-lg md:text-base h-14 text-aqua-100 border-aqua-100 w-44"
            >
              {config.jumbotron.buttons.second.text}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
