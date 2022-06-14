import Image from "next/image";

interface FeatureProps {
  header: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  button: string;
  list?: string[];
  reverse?: boolean;
}

const Feature = ({
  header,
  title,
  description,
  image,
  alt,
  list,
  button,
  reverse,
}: FeatureProps) => {
  return (
    <div
      className={`flex items-center justify-center w-9/12 mx-auto mt-24 mb-24 lg:mb-0 md:w-9/12 md:h-screen md:items-start md:justify-between ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div className="w-full h-full md:w-5/12">
        <p className="mb-8 font-medium uppercase text-stone-400">{header}</p>
        <h1 className="mb-8 font-serif text-2xl font-bold md:text-4xl text-primary-100">
          {title}
        </h1>
        <p className="mb-8 text-sm md:text-base text-stone-400">
          {description}
        </p>

        {list !== undefined && (
          <div className="mb-8 text-sm font-semibold md:text-base text-aqua-100">
            {list.map((item) => (
              <p className="flex items-center mb-2" key={item}>
                <span className="w-1 h-1 mr-3 rounded-full bg-aqua-100"></span>
                {item}
              </p>
            ))}
          </div>
        )}

        <button className="w-48 h-12 font-medium text-white rounded shadow-lg bg-aqua-100">
          {button}
        </button>
      </div>

      <div className="relative hidden w-2/6 md:block h-4/6">
        <Image
          className="hidden"
          src={image}
          alt={alt}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Feature;
