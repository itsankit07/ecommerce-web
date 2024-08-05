const NewArrival = () => {
  return (
    <div className="max-w-6xl mx-auto mt-[8.75rem] mb-[8.75rem] h-[48rem]">
      <div className="flex flex-row justify-start gap-4 items-center">
        <div className="w-[1.25em] h-[2.5em] bg-red-500 rounded-md"></div>
        <p className="font-poppin font-medium text-red-500">Featured</p>
      </div>
      <div>
        <h1 className="font-inter font-semibold text-4xl pt-5">New Arrival</h1>
      </div>

      {/* PLAYSTATION DIV */}
      <div className=" mt-[60px] flex gap-7">
        <div className="relative w-[35.625em] h-[37.8em] bg-black ">
          <img
            className="px-[1.875em] pt-[5.5625em]"
            src="/playstation.png"
            alt=""
          />
          <div className="absolute left-4 bottom-6 flex flex-col justify-between w-[15.125em] h-[7.625em]">
            <h1 className="text-white font-inter font-semibold text-xl ">
              PlayStation 5
            </h1>
            <p className="text-white font-poppin font-light">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="text-white font-poppin font-light">Shop Now</p>
          </div>
        </div>

        {/* WOMEN'S COLLECTION DIV */}

        <div className="flex flex-col justify-between w-[35.625em] h-[37.8em]">
          <div className=" bg-black relative">
            <img className="pl-[8.625em]" src="/attractive-woman.png" alt="" />
            <div className="absolute left-4 bottom-6 flex flex-col justify-between w-[15.9375em] h-[7.625em]">
              <h1 className="text-white font-inter font-semibold text-xl">
                Women’s Collections
              </h1>
              <p className="text-white font-poppin font-light">
                Featured woman collections that give you another vibe.
              </p>
              <p className="text-white font-poppin font-light">Shop Now</p>
            </div>
          </div>

          {/* SPEAKER DIV */}

          <div className="flex justify-between w-[35.625em] h-[17.75em]">
            <div className=" bg-black relative">
              <img
                className="px-[2.5em] py-[2em]"
                src="/amazon-echo.png"
                alt=""
              />
              <div className="absolute left-4 bottom-6 flex flex-col justify-between">
                <h1 className="text-white font-inter font-semibold text-xl">
                  Speakers
                </h1>
                <p className="text-white font-poppin font-light">
                  Amazon wireless speakers
                </p>
                <p className="text-white font-poppin font-light">Shop Now</p>
              </div>
            </div>

            {/* PERFUME DIV */}

            <div className=" bg-black relative">
              <img
                className="px-[2.1875em] pb-[2.6875em] pt-[2.375em]"
                src="/perfume.png"
                alt=""
              />
              <div className="absolute left-4 bottom-6 flex flex-col justify-between">
                <h1 className="text-white font-inter font-semibold text-xl">
                  Perfume
                </h1>
                <p className="text-white font-poppin font-light">
                  GUCCI INTENSE OUD EDP
                </p>
                <p className="text-white font-poppin font-light">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
