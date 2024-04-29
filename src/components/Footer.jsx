import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

const Footer = () => {
  return (
    <div className="my-10">
      <footer className="grid grid-cols-2 md:grid-cols-3 gap-y-10 px-3 md:p-10 bg-slate-900 text-white">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Tour Guid</a>
          <a className="link link-hover">Transport</a>
          <a className="link link-hover">Resort</a>
          <a className="link link-hover my-anchor-element">Hotel</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <Link to="/allSpots" className="link link-hover">
            All Spots
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-slate-900 text-white border-base-300">
        <aside className="items-center font-medium text-lg grid-flow-col">
          <p className="cursor-pointer text-gray-600 hover:text-white">
            PRIVACY
          </p>
          <p>&</p>
          <p className="cursor-pointer text-gray-600 hover:text-white">
            PRIVACY
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>© Copyright Reserved by Tour Guide BD.</p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
