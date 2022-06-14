import Image from "next/image";

interface CompanyProps {
  name: string;
  logo: string;
}

const Company = ({ name, logo }: CompanyProps) => {
  return (
    <div className="relative mx-1 mb-8 w-28 h-14 md:mx-3">
      <Image
        className="grayscale"
        src={logo}
        alt={name}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  );
};

export default Company;
