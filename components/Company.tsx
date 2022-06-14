interface CompanyProps {
  name: string;
  logo: string;
}

const Company = ({ name, logo }: CompanyProps) => {
  return (
    <img
      className="object-contain object-center mx-1 mb-8 md:mx-3 w-28 grayscale h-14"
      src={logo}
      alt={name}
    />
  );
};

export default Company;
