const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-[15.0625em]">
          <h1 className="text-7xl font-inter font-semibold tracking-widest">
            404 Not Found
          </h1>
          <h4 className="pt-10">
            Your visited page not found. You may go home page.
          </h4>
        </div>

        <div className="flex w-[15.875em] h-14 justify-center items-center mt-20  mb-[8.75em] bg-red-500 text-white rounded-md">
          <p className="font-poppin">Back To Home Page</p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
