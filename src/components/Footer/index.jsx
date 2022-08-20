import imgFooter from "../../assets/images/footer.jpg";
import logo1 from "../../assets/images/logo1.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      className=""
      style={{
        background: `url(${imgFooter})  no-repeat center / cover  `,
      }}
    >
      <div className="pt-[70px] px-3 md:py-[100px] flex flex-col items-center ">
        {/* logo */}
        <div className="w-full max-w-[200px] mb-12">
          <Link to="/">
            <img src={logo1} alt="" />
          </Link>
        </div>
        <div className="text-white flex justify-between md:flex-nowrap md:w-full md:px-8 lg:w-[900px] flex-wrap ">
          <ul className="mb-5">
            <li className="font-semibold text-2xl p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">Contact us</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">Term of services</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">About us</Link>
            </li>
          </ul>
          <ul className="mb-5">
            <li className="font-semibold text-2xl p-2">
              <Link to="/">Live</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">Premium</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">Pravacy policy</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">FAQ</Link>
            </li>
          </ul>
          <ul className="mb-5">
            <li className="font-semibold text-2xl p-2">
              <Link to="/">You must watch</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">You must watch</Link>
            </li>
            <li className="font-semibold text-2xl p-2">
              <Link to="/">Top IMDB</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
