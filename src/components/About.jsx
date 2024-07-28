const About = () => {
  return (
    <div className="flex flex-row justify-between ml-[8.4375rem] mt-[8.9375rem] border-2 border-black">
      <div className="w-[32.8125em] h-[21em] mt-[8.5625em] border-2 border-black">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-semibold">Our Story</h1>
          </div>
          <div className="flex flex-col mt-[2.5em] gap-[1.5em]">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[44.0625em] h-[38.0625em] border-2 border-black">
        <img src="/AboutImage.png" alt="" />
      </div>
    </div>
  );
};

export default About;
