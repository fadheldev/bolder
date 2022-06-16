import config from "../config/config.json"

const Footer = () => {
  return (
    <footer className="w-10/12 mx-auto my-32">
      <div className="flex flex-wrap justify-between w-full">
        <div className="flex flex-col mx-5 mb-8">
          <h3 className="mb-6 text-xl font-bold text-primary-100">Company</h3>
          <a className="mb-4 text-slate-500" href="#">
            About Us
          </a>
          <a className="mb-4 text-slate-500" href="#">
            Programs
          </a>
          <a className="text-slate-500" href="#">
            Careers
          </a>
        </div>
        <div className="flex flex-col mx-5 mb-8">
          <h3 className="mb-6 text-xl font-bold text-primary-100">Services</h3>
          <a className="mb-4 text-slate-500" href="#">
            Support Center
          </a>
          <a className="mb-4 text-slate-500" href="#">
            FAQ
          </a>
        </div>
        <div className="flex flex-col mx-5 mb-8">
          <h3 className="w-full mb-6 text-xl font-bold text-primary-100">
            Resources
          </h3>
          <a className="mb-4 text-slate-500" href="#">
            Watch a Demo
          </a>
          <a className="mb-4 text-slate-500" href="#">
            E-Book
          </a>
          <a className="text-slate-500" href="#">
            Blog
          </a>
        </div>
        <div className="flex flex-col mx-5 mb-8">
          <h3 className="w-full mb-6 text-xl font-bold text-primary-100">
            Legal
          </h3>
          <a className="mb-4 text-slate-500" href="#">
            Terms & Services
          </a>
          <a className="mb-4 text-slate-500" href="#">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col mx-5 mb-8">
          <h3 className="w-full mb-6 text-xl font-bold text-primary-100">
            Contact
          </h3>
          <p className="mb-4 text-slate-500">{config.phoneNumber}</p>
          <p className="text-slate-500">{config.email}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-24 md:flex-row md:justify-between">
        <div className="flex items-center mb-8 md:mb-0">
          <a className="w-4 h-4 mr-8 text-primary-100" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="w-4 h-4 mr-8 text-primary-100" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="w-4 h-4 text-primary-100" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>

        <p className="text-sm md:text-base text-primary-100">
          Copyright &copy; {new Date().getFullYear()} Bolder. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
