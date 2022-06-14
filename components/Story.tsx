interface StoryProps {
  title: string;
  author: string;
  description: string;
  image: string;
  alt: string;
  secondaryImage: string;
  secondaryAlt: string;
  quote: any;
  header?: string;
}

const Story = ({title, author, description, image, alt, secondaryImage, secondaryAlt, quote, header}: StoryProps) => {
  return (
    <div className="flex items-start w-11/12 py-10 mx-auto mt-24 mb-24 rounded lg:justify-between px-14 lg:w-9/12 bg-light-300">
      <div className="w-full lg:w-1/2">
        <h1 className="mb-4 font-serif text-3xl font-bold md:text-4xl text-primary-100">
        {header ?? "Success Story"}
        </h1>
        <div className="flex items-center mb-16 text-sm md:text-base">
          <div className="w-8 h-0.5 mr-2 bg-brown-100"></div>
          <p className="font-semibold uppercase text-brown-100">
            {title}
          </p>
        </div>

        <div className="relative mb-16">
          <span className="absolute top-0 left-0 font-serif text-gray-300 -z-10 text-9xl">
            &ldquo;
          </span>
          <p className="z-50 font-serif text-xl md:text-2xl text-brown-100">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-2 text-lg font-semibold text-brown-100">
            {author}
          </p>
          <p className="text-base font-semibold text-neutral-400">
            {description}
          </p>
        </div>

        <img
          className="object-contain object-center w-24"
          src={secondaryImage}
          alt={secondaryAlt}
        />
      </div>

      <img
        className="hidden object-contain object-center md:block"
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default Story;
