const AccountPage = () => {
  return (
    <div className="max-w-6xl mx-auto mb-[8.75rem] h-[39.375rem] mt-[11.3125rem] border-2 border-black flex flex-row justify-between">
      <aside></aside>
      <div className="w-8/12 shadow-2xl">
        <div className="mx-[4em] mt-[2.5em]">
          <h1 className="tracking-wide font-poppin font-medium text-red-500">
            Edit Your Profile
          </h1>

          <div className="flex mt-4 flex-row justify-between ">
            <div className="w-5/12 ">
              <h1 className="font-poppin font-normal">First Name</h1>
              <input
                className="bg-slate-200 mt-2 w-full h-[3.125em]"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-5/12 ">
              <h1 className="font-poppin font-normal">Last Name</h1>
              <input
                className=" bg-slate-200 mt-2 w-full h-[3.125em]"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <div className="w-5/12">
              <h1 className="font-poppin font-normal">Email</h1>
              <input
                className="w-full bg-slate-200 mt-2 h-[3.125em]"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-5/12">
              <h1 className="font-poppin font-normal">Address</h1>
              <input
                className="w-full bg-slate-200 mt-2 h-[3.125em]"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <h1 className="mt-6">Password Changes</h1>
          <input
            className="w-full bg-slate-200 mt-4 h-[3.125em] rounded"
            type="text"
            placeholder=""
          />
          <input
            className="w-full bg-slate-200 mt-4 h-[3.125em] rounded"
            type="text"
            placeholder=""
          />
          <input
            className="w-full bg-slate-200 mt-4 h-[3.125em] rounded"
            type="text"
            placeholder=""
          />

          <div className="flex flex-row-reverse mt-4 gap-6">
            <button className="font-poppin w-[13.4375em] h-[3.5em] bg-red-500 text-white rounded-md">
              Save Changes
            </button>
            <button className="font-poppin">cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
