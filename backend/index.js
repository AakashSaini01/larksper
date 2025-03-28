const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bcrypt = require("bcrypt");
require("dotenv").config();

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/larksper", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define Schemas and Models
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: String,
  phoneNo: String,
});

// Validate password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model("User", userSchema);

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    categoryName: String,
    categoryDescription: String,
    categoryImage: String,
  })
);

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    productName: String,
    description: String,
    oldPrice: Number,
    newPrice: Number,
    imageUrl: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  })
);

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    categoryId: mongoose.Schema.Types.ObjectId,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User " },
    productName: String,
    quantity: Number,
    size: String,
    colour: String,
    totalAmount: Number,
    shippingAddress: String,
  })
);

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User " },
    orderId: String,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    productImage: String,
    productName: String,
    quantity: Number,
    totalAmount: Number,
    orderDate: { type: Date, default: Date.now },
    deliveryStatus: String,
    paymentMethod: String,
  })
);

// API Routes (POST Methods)
app.post("/users", async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debugging Line

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      address,
      phoneNo,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNo,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error Saving User:", err); // Debugging Line
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/categories", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/cart", async (req, res) => {
  try {
    const newCartItem = new Cart(req.body);
    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/orders", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API Routes (GET Methods)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Category endpoints
app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Product endpoints
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/category/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({ categoryId }).populate("categoryId");
    if (!products.length) {
      return res
        .status(404)
        .json({ message: "No products found for this category" });
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cart endpoints
app.get("/cart", async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId userId");
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/cart/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id).populate(
      "productId userId"
    );
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Order endpoints
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("userId productId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "userId productId"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
