// Footer.jsx
import { Link } from "react-router";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white">CleanUpHub</h1>
          <p className="text-gray-400 text-sm">
            A platform to report community issues and contribute to a cleaner,
            safer environment.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Useful Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/issues"
                className="hover:text-green-400 transition-colors"
              >
                Issues
              </Link>
            </li>
            <li>
              <Link
                to="/add-issue"
                className="hover:text-green-400 transition-colors"
              >
                Add Issue
              </Link>
            </li>
            <li>
              <Link
                to="/my-issues"
                className="hover:text-green-400 transition-colors"
              >
                My Issues
              </Link>
            </li>
            <li>
              <Link
                to="/my-contributions"
                className="hover:text-green-400 transition-colors"
              >
                My Contributions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Copyright */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p className="text-gray-400 text-sm">Email: support@cleanuphub.com</p>
          {/* 🌐 Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition"
              aria-label="Twitter (X)"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CleanUpHub. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        Made with ❤️ by CleanUpHub Team
      </div>
    </footer>
  );
};

export default Footer;
