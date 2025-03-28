import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faGift,
  faRightLeft,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

library.add(faCalendar, faGift, faShoppingBag, faRightLeft);

const featuresData = [
  {
    id: 1,
    icon: faCalendar,
    title: "Book an Appointment",
    description: "Schedule a consultation with our experts.",
  },
  {
    id: 2,
    icon: faShoppingBag,
    title: "Pick up in Store",
    description: "Order online, pick up at your nearest store.",
  },
  {
    id: 3,
    icon: faGift,
    title: "Special Packaging",
    description: "Premium gift packaging for all occasions.",
  },
  {
    id: 4,
    icon: faRightLeft,
    title: "Free Global Returns",
    description: "Hassle-free returns, worldwide.",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev % featuresData.length) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="features font-dot">
      <AnimatedSection animation="fade-up">
        <div className="md:container flex flex-col items-center justify-center">
          <div className="row md:max-w-6xl md:flex md:justify-center md:gap-8">
            {featuresData.map((feature) => (
              <AnimatedSection key={feature.id} animation="fade-up">
                <div
                  className={`col-auto text-center md:flex-1 flex flex-col items-center transition-transform duration-300 ${
                    activeFeature === feature.id
                      ? "opacity-100 scale-110"
                      : "opacity-50"
                  }`}
                >
                  <FontAwesomeIcon
                    className="md:text-4xl text-gray-500/75"
                    icon={feature.icon}
                  />
                  <h2 className="sm:text-2xl mt-3 md:w-50">{feature.title}</h2>
                  <p className="sm:text-md text-gray-500/75 md:w-50 mt-2 mb-2">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
