"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import larksper from "../assets/banner.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const categories = [
  { id: "women", name: "Women" },
  { id: "men", name: "Men" },
  { id: "accessories", name: "Accessories" },
  { id: "jewelleries", name: "Jewelleries" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <header className="">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between pb-1 lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
              className="text-sm/6 font-semibold text-gray-900"
            >
              {category.name}
            </Link>
          ))}
        </PopoverGroup>
        <div className="flex md:flex-1 w-1/3 justify-center">
          <div
            onClick={function () {
              navigate("/");
            }}
            className="m-0 p-0 cursor-pointer"
          >
            <span className="sr-only">Larksper</span>
            <img alt="" src={larksper} className="h-16 w-full" />
          </div>
        </div>
        <div className="hidden lg:flex w-1/3 lg:flex-1 lg:justify-end">
          <a
            href="/cart"
            className="text-sm/6 columns-2 font-semibold text-gray-900"
          >
            <span aria-hidden="true"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </a>
          <a
            href="/"
            className="text-sm/6 columns-2 font-semibold text-gray-900"
          >
            <span aria-hidden="true"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <a
            href="./products.js"
            className="text-sm/6 columns-2 font-semibold text-gray-900"
          >
            <span aria-hidden="true"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </a>
          <div
            onClick={function () {
              navigate("/Login");
            }}
            className="text-sm/6 columns-2 font-semibold cursor-pointer text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </div>
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
                  onClick={function () {
                    navigate("/products");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Women
                </div>
                <div
                  onClick={function () {
                    navigate("/products");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Men
                </div>
                <div
                  onClick={function () {
                    navigate("/products");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Accessories
                </div>
              </div>
              <div className="py-6">
                <div
                  onClick={function () {
                    navigate("/Login");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
