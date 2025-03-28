"use client";
import { useState, useEffect, Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  PopoverGroup,
  Menu,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import larksper from "../assets/banner.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const categories = [
  {
    id: "women",
    name: "Women",
  },
  {
    id: "men",
    name: "Men",
  },
  {
    id: "accessories",
    name: "Accessories",
  },
  {
    id: "Jewelleries",
    name: "Jewelleries",
  },
];

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Products", href: "/products", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  // Helper function to extract first name
  const getFirstName = (user) => {
    if (!user) return "";

    // If firstName is explicitly set
    if (user.firstName) return user.firstName;

    // Try to extract first name from full name or email
    if (user.name) {
      return user.name.split(" ")[0];
    }

    if (user.email) {
      return user.email.split("@")[0];
    }

    return "";
  };

  const firstName = getFirstName(user);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between pb-1 lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden cursor-pointer lg:flex w-1/3 lg:gap-x-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className={`text-sm/6 font-semibold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </PopoverGroup>
        <div className="flex md:flex-1 w-1/3 justify-center">
          <div onClick={() => navigate("/")} className="m-0 p-0 cursor-pointer">
            <span className="sr-only">Larksper</span>
            <img
              alt=""
              src={larksper}
              className={`h-16 w-full ${
                isScrolled ? "brightness-0" : "brightness-0 invert"
              } transition-all duration-300`}
            />
          </div>
        </div>
        <div className="hidden lg:flex w-1/3 lg:flex-1 lg:justify-end items-center space-x-4">
          <a
            href="/cart"
            className={`text-sm/6 columns-2 font-semibold ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <span aria-hidden="true"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </a>
          <a
            href="/"
            className={`text-sm/6 columns-2 font-semibold ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <span aria-hidden="true"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a
            href="./products.js"
            className={`text-sm/6 columns-2 font-semibold ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <span aria-hidden="true"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </a>
          {user ? (
            <div className="relative">
              <Menu as="div" className="relative">
                <Menu.Button
                  className={`text-sm/6 font-semibold cursor-pointer flex items-center ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  {firstName} ▼
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/profile"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/orders"
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Orders
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active ? "bg-gray-100" : ""
                          } w-full text-left block px-4 py-2 text-sm text-gray-700`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <div
              onClick={() => navigate("/Login")}
              className={`text-sm/6 columns-2 font-semibold cursor-pointer ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </div>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="./products" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                  </DisclosureButton>
                </Disclosure>
                <div
                  onClick={() => navigate("/products")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Women
                </div>
                <div
                  onClick={() => navigate("/products")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Men
                </div>
                <div
                  onClick={() => navigate("/products")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Accessories
                </div>
              </div>
              <div className="py-6 uppercase">
                {user ? (
                  <>
                    <div
                      onClick={() => navigate("/profile")}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {firstName}
                    </div>
                    <div
                      onClick={handleLogout}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Logout
                    </div>
                  </>
                ) : (
                  <div
                    onClick={() => navigate("/Login")}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
