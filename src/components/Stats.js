import { useEffect, useState } from "react";
import { animate } from "motion";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: 50 },
  { id: 2, name: "Assets under holding", value: 1000 },
  { id: 3, name: "New users annually", value: 46000 },
];

export default function Stats() {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      animate(0, stat.value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.round(latest);
            return newValues;
          });
        },
      });
    });
  }, []);

  return (
    <div className=" font-dot py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs font-dot flex-col gap-y-4"
            >
              <dt className="text-base/7 font-dot text-gray-600">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {animatedValues[index].toLocaleString()}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
