import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const Footer = () => {
  return (
    
      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-between gap-10 md:flex-nowrap">
            {/* Brand Section */}
            <div className="flex-1">
              <h2 className="text-xl font-bold">Bazario.CO</h2>
              <p className="mt-2 text-gray-600 max-w-xs">
                We have clothes that suit your style and make you proud to wear.
                From women to men.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09">
                  <FaTwitter size={20} />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61564881342854">
                  <FaFacebook size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/ali-askari-355257308/">
                  <FaLinkedinIn size={20} />
                </Link>
                <Link href="https://github.com/AliAskariGithub">
                  <VscGithubInverted size={20} />
                </Link>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap gap-10 md:flex-nowrap">
              {["Company", "Help", "FAQ", "Resources"].map((section, idx) => (
                <div key={idx} className="flex-1">
                  <h3 className="mb-4 text-lg font-medium">{section}</h3>
                  <ul className="space-y-2">
                    {section === "Company" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Works
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Career
                          </Link>
                        </li>
                      </>
                    )}
                    {section === "Help" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Customer Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Delivery Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Terms & Conditions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </>
                    )}
                    {section === "FAQ" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Manage Deliveries
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Payments
                          </Link>
                        </li>
                      </>
                    )}
                    {section === "Resources" && (
                      <>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Free eBooks
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            Development Tutorials
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            How-to Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            YouTube Playlist
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between pt-4 mt-10 text-sm text-gray-500 border-t md:flex-row gap-y-3">
            <p className="text-center md:text-left">Bazario.CO ©2025 | All Rights Reserved</p>
            <div className="flex space-x-4">
              {["card01.png", "card02.png", "card03.png", "card04.png", "card05.png"].map(
                (src, index) => (
                  <Image
                    key={index}
                    src={`/${src}`}
                    alt={`Payment Method ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-20"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
