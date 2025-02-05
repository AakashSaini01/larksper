export default function NewsLetter() {
  return (
    <div className="relative isolate bg-Bloom font-dot p-20">
      <div className="mx-auto max-w-4xl overflow-hidden bg-white shadow-lg rounded-lg p-20 text-center">
        <h2 className="text-4xl font-bold capitalize tracking-tight sm:text-5xl">
          Get notified when we’re launching
        </h2>
        <p className="mt-4 text-lg leading-6 font-medium text-gray-500">
          Stay in the loop! Sign up for exclusive updates and be the first to
          know about our latest news, product launches, and offers. Don’t miss
          out—subscribe now!
        </p>
        <div className="mt-8 flex justify-center gap-x-4">
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto rounded-md bg-black/10 px-4 py-2 text-base placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:max-w-sm"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
}
