import React from "react";

const Checkout = () => {
  return (
    <div className="flex p-10 bg-gray-50">
      {/* Billing Address Section */}
      <div className="w-1/2 p-5 bg-white shadow-md rounded-lg mr-5">
        <h2 className="text-2xl font-semibold mb-5">Billing Address</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name *</label>
            <input
              type="text"
              placeholder="Metlinda Parker"
              className="w-full p-2 border-2 border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number *</label>
            <div className="flex">
              <select className="p-2 border-2 border-gray-300 rounded-md mr-2">
                <option>IN</option>
              </select>
              <input
                type="text"
                placeholder="+91 000 000 0000"
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address *</label>
            <input
              type="text"
              placeholder="A 1003 Alpha Plus, Raiya Telephone"
              className="w-full p-2 border-2 border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Country *</label>
              <input
                type="text"
                placeholder="India"
                className="w-full p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">State *</label>
              <input
                type="text"
                placeholder="Gujrat"
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">City *</label>
              <input
                type="text"
                placeholder="Rajkot"
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">Zip / Postal Code *</label>
              <input
                type="text"
                placeholder="360 005"
                className="w-full p-2 border-2 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">
              Select the Delivery Address *
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                name="delivery"
                value="home"
                className="mr-2"
              />
              <label>Home</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="delivery"
                value="office"
                className="mr-2"
              />
              <label>Office (10AM to 5PM)</label>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-5">Payment Method</h2>
          <div className="flex space-x-3">
            <img src="/path/to/visa.png" alt="VISA" className="h-8" />
            <img src="/path/to/google-pay.png" alt="GPay" className="h-8" />
            <img
              src="/path/to/mastercard.png"
              alt="MasterCard"
              className="h-8"
            />
            <img src="/path/to/paypal.png" alt="PayPal" className="h-8" />
          </div>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="w-1/2 p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-5">Your Order</h2>

        <div>
          <div className="flex justify-between mb-4">
            <div>
              <div className="font-semibold">Men’s Nike Sport Shoes</div>
              <div>$120</div>
              <label>Size</label>
              <select className="border-2 border-gray-300 rounded-md mb-2">
                <option>8</option>
              </select>
              <label>Quantity</label>
              <div className="flex items-center">
                <button className="border border-gray-300 px-2">-</button>
                <span className="mx-2">1</span>
                <button className="border border-gray-300 px-2">+</button>
              </div>
            </div>
            <button className="text-red-500">✖</button>
          </div>

          <div className="flex justify-between mb-4">
            <div>
              <div className="font-semibold">Girl’s Shoes</div>
              <div>$100</div>
              <label>Size</label>
              <select className="border-2 border-gray-300 rounded-md mb-2">
                <option>12</option>
              </select>
              <label>Quantity</label>
              <div className="flex items-center">
                <button className="border border-gray-300 px-2">-</button>
                <span className="mx-2">1</span>
                <button className="border border-gray-300 px-2">+</button>
              </div>
            </div>
            <button className="text-red-500">✖</button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Coupon Code</label>
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full p-2 border-2 border-gray-300 rounded-md mb-2"
          />
          <button className="bg-green-500 text-white rounded-md px-4 py-2">
            Apply Code
          </button>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$220.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery:</span>
            <span>$2.00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>$222.00</span>
          </div>
        </div>

        <button className="bg-green-500 text-white rounded-md px-4 py-2 mt-5 w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
