import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faGift,
  faRightLeft,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

library.add(faCalendar);
library.add(faGift);
library.add(faShoppingBag);
library.add(faRightLeft);

export default function Features() {
  return (
    <>
      <div className="features mt-20 mb-10 font-dot">
        <div className="md:container flex flex-col items-center justify-center">
          <div className="row md:max-w-6xl md:flex md:justify-center md:gap-8">
            <div className="col-auto text-center md:flex-1 flex flex-col items-center">
              <FontAwesomeIcon
                className="md:text-4xl text-gray-500/75"
                icon={faCalendar}
              />
              <h2 className="sm:text-2xl mt-3 md:w-50">Book an Appointment</h2>
              <p className="sm:text-md text-gray-500/75 md:w-50 mt-2 mb-4">
                Schedule a consultation with our experts.
              </p>
            </div>

            <div className="col-auto text-center md:flex-1 flex flex-col items-center">
              <FontAwesomeIcon
                className="md:text-4xl text-gray-500/75"
                icon={faShoppingBag}
              />
              <h2 className="sm:text-2xl mt-3 md:w-50">Pick up in Store</h2>
              <p className="sm:text-md text-gray-500/75 md:w-50 mt-2 mb-4">
                Order online, pick up at your nearest store.
              </p>
            </div>

            <div className="col-auto text-center md:flex-1 flex flex-col items-center">
              <FontAwesomeIcon
                className="md:text-4xl text-gray-500/75"
                icon={faGift}
              />
              <h2 className="sm:text-2xl mt-3 md:w-50">Special Packaging</h2>
              <p className="sm:text-md text-gray-500/75 md:w-50 mt-2 mb-4">
                Premium gift packaging for all occasions.
              </p>
            </div>

            <div className="col-auto text-center md:flex-1 flex flex-col items-center">
              <FontAwesomeIcon
                className="md:text-4xl text-gray-500/75"
                icon={faRightLeft}
              />
              <h2 className="sm:text-2xl mt-3 md:w-50">Free Global Returns</h2>
              <p className="sm:text-md text-gray-500/75 md:w-50 mt-2 mb-4">
                Hassle-free returns, worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
