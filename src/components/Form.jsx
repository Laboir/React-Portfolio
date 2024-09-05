export default function Form() {
  return (
    <div className="flex justify-center">
      <div className="  gap-5  py-5 px-5 w-[1200px] flex flex-col  justify-center  items-center h-screen ">
        <h2 className=" text-4xl"> Contact </h2>
        <form className="flex flex-col gap-6">
          {/* First and Lastname */}

          <div className="flex gap-3 ">
            {/* firstname */}
            <div className="flex  flex-col ">
              <label htmlFor=""> First Name </label>
              <input className=" w-[350px]" type="text" name="first name" />
            </div>

            {/* Lastname */}
            <div className="flex flex-col ">
              <label htmlFor=""> Last Name </label>
              <input className=" w-[350px]" type="text" name="last name" />
            </div>
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor=""> Email </label>
            <input
              className="border-2 border-black"
              type="email"
              name="last name"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor=""> Phone </label>
            <input
              className="border-2 border-black"
              type="number"
              name="last name"
            />
          </div>

          {/* Message */}
          <article className="flex flex-col">
            <label htmlFor=""> Message </label>
            <textarea
              className="border-2 border-black"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </article>
        </form>
      </div>
    </div>
  );
}
