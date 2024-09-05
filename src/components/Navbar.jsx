import { BrowserRouter, Link } from "react-router-dom";

BrowserRouter;

export default function Navbar() {
  return (
    <nav>
      <ul className=" mx-auto  w-[700px] font-semibold   justify-around text-[1.5rem] flex gap-5 list-none  cursor-pointer  ">
        <BrowserRouter>
          <li className="text-white transition ease-in-out  delay-200  hover:text-red-600 hover:scale-125     capitalize">
            <Link className="  "> about </Link>
          </li>
          <li className="text-white transition ease-in-out  delay-200  hover:text-red-600 hover:scale-125 capitalize">
            <a href="#project"> project </a>
          </li>
          <li className="text-white transition ease-in-out  delay-200  hover:text-red-600 hover:scale-125 capitalize">
            contact
          </li>
        </BrowserRouter>
      </ul>
    </nav>
  );
}
