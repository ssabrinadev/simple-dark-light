import { Link } from "react-router-dom";
import { Theme } from "@features";

export const Header = () => {
  return (
    <header className="bg-white dark:bg-black dark:border">
      <nav
        aria-label="Global"
        className="container flex items-center justify-between p-6 "
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <h1 className="font-bold">Logo</h1>
          </Link>
        </div>
        <div className="flex lg:flex-1 lg:justify-end items-center gap-5">
          <Link to="/auth/sign-in" className="text-sm/6 font-semibold">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          <Theme />
        </div>
      </nav>
    </header>
  );
}
