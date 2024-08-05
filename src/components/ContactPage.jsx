const ContactPage = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between mx-[8.4375rem] mt-[11.3125rem] mb-[8.75rem] ">
        <div className=" w-[21.25em] h-[28.5625em] flex flex-col shadow-2xl">
          <div className="flex flex-col mt-[2.5em] mx-[2.1875em] mb-[3.1875em] ">
            <div className="flex flex-col  gap-[1em] mb-[2em] mr-[0.5em]">
              <p className="font-poppin font-medium">Call to us</p>
              <p className="font-poppin font-normal text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="pb-[2em] font-poppin font-normal text-sm ">
                Phone: +8801611112222
              </p>
            </div>
            <div className="flex flex-col  gap-[1em]  mr-[1.25em]">
              <p className="font-poppin font-medium">Write To US</p>
              <p className="font-poppin font-normal text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="font-poppin font-normal text-sm">
                Emails: customer@exclusive.com
              </p>
              <p className="font-poppin font-normal text-sm">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[50em] h-[28.5625em] shadow-2xl drop-shadow-2xl">
          <div className="mx-[2em] my-[2.5em]">
            <div className="flex flex-col gap-[2em]">
              <div className="flex flex-row justify-between">
                <input
                  className="pl-2 bg-slate-200 h-[3.125em]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                />
                <input
                  className="pl-2 bg-slate-200 h-[3.125em]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email"
                />
                <input
                  className="pl-2 bg-slate-200  h-[3.125em]"
                  type="number"
                  name=""
                  id=""
                  placeholder="Your Phone"
                />
              </div>
              <div className=" h-[12.9375em] bg-slate-200 ">
                <input
                  className="bg-slate-200 pl-2"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Message"
                />
              </div>
              <div className="flex flex-row-reverse  ">
                <button className="w-[13.4375em] h-[3.5em] bg-red-500 text-white rounded-md">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
