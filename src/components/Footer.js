import logo from "../assets/banner.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer className="bg-Bloom text-gray-600 cursor-pointer">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Logo and Description */}
          <div>
            <div className="flex items-center">
              <img className="" src={logo} alt="logo" />
            </div>
          </div>

          {/* Legal */}
          <div className="ml-24">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  Terms of service
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  Privacy policy
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  License
                </div>
              </li>
            </ul>
          </div>

          {/*  */}
          <div className="ml-12">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Icons
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  <YouTubeIcon />
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  <MailOutlineIcon />
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  <CallIcon /> +918527767686
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-1">
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  <InstagramIcon /> larksper
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  <FacebookIcon />
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  <XIcon />
                </div>
              </li>
              <li>
                <div className="text-gray-600 hover:text-indigo-500">
                  <WhatsAppIcon />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-sm text-center text-gray-500">
            © 2023 Larksper Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
