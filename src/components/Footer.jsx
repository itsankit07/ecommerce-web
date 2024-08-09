import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black min-h-[440px] ">
      <div className="flex flex-row text-white justify-evenly gap-[87px] pt-20 px-[134px] pb-[95px] flex-wrap">
        <div className="flex flex-col gap-4 ">
          <p className="tracking-wide text-lg font-bold font-inter w-[118px] h-[24px]">
            Exclusive
          </p>
          <a className="font-medium font-poppin w-[101px] h-[28px] ">
            Subscribe
          </a>
          <p className="font-extralight font-poppin">
            Get 10% Off on your first order
          </p>
          <input
            className="border-[1.5px] rounded-md bg-black font-poppin text-white font-normal pl-2 py-3 pr-4"
            type="text"
            placeholder="Enter Your email"
          />
        </div>

        <div className="flex flex-col gap-6 w-[175px] ">
          <p>Support</p>

          <p className="font-extralight">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="font-extralight">exclusive@gmail.com</p>
          <p className="font-extralight">+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-poppin">Account</p>

          <p className="font-extralight font-poppin">My Account</p>
          <p className="font-extralight font-poppin">Login / Register</p>
          <p className="font-extralight font-poppin">Cart</p>
          <p className="font-extralight font-poppin">Wishlist</p>
          <p className="font-extralight font-poppin">Shop</p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-poppin">Quick Links</p>

          <p className="font-poppin font-extralight">Privacy Policy</p>
          <p className="font-extralight font-poppin">Terms Of Use</p>
          <p className="font-extralight font-poppin">FAQ</p>
          <p className="font-extralight font-poppin">Contact</p>
        </div>

        {/* <div className="flex flex-col gap-6">
          <p className="font-poppin">Download App</p>
        </div> */}
        <div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Download App</h2>
            <p className="mb-4 text-xs">Save $3 with App New User Only</p>
          </div>

          <div className="flex flex-row justify-evenly gap-2">
            <div className="mb-4">
              <img src="/Qrcode 1.png" alt="Qrcode" className="w-24 h-24" />
            </div>

            <div className="flex flex-col py-1 gap-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/playstore.png" alt="Google Play" className="w-32" />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/appstore.png" alt="App Store" className="w-32" />
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-6 mr-9 gap-9">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="text-white hover:text-gray-400"
                size={24}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-gray-400" size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-white hover:text-gray-400"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="text-white hover:text-gray-400"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-gray-500 flex justify-center items-center py-3 border-gray-400 border-t-[0.5px]">
        <span className="font-poppin">
          &#9400; Copyright Rimel 2022. All right reserved{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
