export default function WelcomePage() {
  return (
    <div className="relative bg-Bloom overflow-hidden font-dot pb-10">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg animate-fadeinleft">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Larksper
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Welcome to Larksper! Explore trendy, high-quality products at
              unbeatable prices, with fast shipping and excellent customer
              service.
            </p>
          </div>
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center animate-fadeinright space-x-6 lg:space-x-8">
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="./products.js"
              className="inline-block rounded-md border animate-fadeinleft border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
