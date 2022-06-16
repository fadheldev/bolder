import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import config from "../config/config.json"

const Header = () => {
  const router = useRouter();
  const [menuToggled, setMenuToggled] = useState(false);

  useEffect(() => {
    const routeChangeHandler = () => {
      setMenuToggled(false);
    };

    router.events.on("routeChangeStart", routeChangeHandler);

    return () => {
      router.events.off("routeChangeStart", routeChangeHandler);
    };
  }, [router.events]);

  return (
    <>
      <header className="w-10/12 mx-auto my-10">
        <div className="flex items-center justify-between w-full h-6">
          <Link href="/">
            <span className="font-serif text-xl font-extrabold uppercase cursor-pointer text-primary-200">
              {config.name.toUpperCase()}.
            </span>
          </Link>
          <button
            onClick={() => setMenuToggled((menuToggled) => !menuToggled)}
            className="flex items-center justify-center text-slate-500 lg:hidden"
          >
            {menuToggled ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <div className="hidden lg:flex">
            <div className="mr-6 font-medium text-slate-500 lg:flex">
              <a className="mr-4" href="#">
                How it works
              </a>
              <a className="mr-4" href="#">
                Programs
              </a>
              <a className="mr-4" href="#">
                Careers
              </a>
              <a href="#">Resources</a>
            </div>

            <div className="w-px h-6 mx-8 bg-gray-300"></div>

            <div>
              <Link href="/signup">
                <span className="mr-6 font-medium cursor-pointer text-primary-200">
                  Sign up
                </span>
              </Link>
              <Link href="/login">
                <span className="px-6 py-2 font-medium border rounded shadow-md cursor-pointer border-aqua-100 text-aqua-100">
                  Log in
                </span>
              </Link>
            </div>
          </div>
        </div>

        {menuToggled && (
          <div className="flex flex-col items-start justify-center w-full mt-10 lg:hidden">
            <div className="flex flex-col justify-center font-medium text-slate-500">
              <a className="mb-5" href="#">
                How it works
              </a>
              <a className="mb-5" href="#">
                Programs
              </a>
              <a className="mb-5" href="#">
                Careers
              </a>
              <a className="mb-10" href="#">
                Resources
              </a>
            </div>

            <div>
              <Link href="/signup">
                <span className="mr-6 font-medium cursor-pointer text-primary-200">
                  Sign up
                </span>
              </Link>
              <Link href="/login">
                <span className="px-6 py-2 font-medium border rounded shadow-md cursor-pointer border-aqua-100 text-aqua-100">
                  Log in
                </span>
              </Link>
            </div>
          </div>
        )}
      </header>
      <div className="w-full h-px bg-gray-100"></div>
    </>
  );
};

export default Header;
