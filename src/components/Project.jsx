/* eslint-disable react/prop-types */
import { BrowserRouter, Link } from "react-router-dom";

function Project() {
  return (
    <div
      className=" h-full  py-16  justify-center flex flex-col items-center gap-5 "
      id="project"
    >
      <h2 className="text-6xl font-[600]  pb-10   ">Project</h2>
      <section className="flex w-[1200px]  justify-around   ">
        <BrowserRouter>
          <Link to="https://lakshdeep-tour.netlify.app/">
            <Cards
              ProjectName={"Lakshdeep"}
              img={"../../public/Lakshdeep.jpg"}
            />
          </Link>

          <Link to={"https://stopwatchapplication12.netlify.app/"}>
            <Cards ProjectName={"Stop Watch"} img={"../../public/Timer.jpg"} />
          </Link>
        </BrowserRouter>
      </section>
    </div>
  );
}

function Cards({ img, ProjectName }) {
  return (
    <div className="relative flex   items-center ">
      <img className="rounded-md w-[350px] h-[400px] object-cover " src={img} />

      <section className=" gap-5 rounded-md cursor-pointer transition ease-in-out delay-200    opacity-0  h-full w-full flex flex-col items-center text-white justify-center absolute top-0  text-center bg-[rgba(0,0,0,0.5)]   hover:opacity-100   ">
        <h2 className="pt-5 text-2xl "> {ProjectName} </h2>

        <p className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
    </div>
  );
}

export default Project;
