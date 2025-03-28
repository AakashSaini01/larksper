import axios from "axios";

const API_URL = "http://localhost:5000";

// Auth APIs
export const login = async (body) => {
  try {
    const response = await axios.post(API_URL + "/login", body);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signup = async (body) => {
  try {
    const response = await axios.post(API_URL + "/users", body);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

// Product APIs
export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL + "/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      API_URL + `/products/category/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

// Cart APIs
export const getCartItems = async () => {
  try {
    const response = await axios.get(API_URL + "/cart");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

export const addToCart = async (cartData) => {
  try {
    const response = await axios.post(API_URL + "/cart", cartData);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Category APIs
export const getAllCategories = async () => {
  try {
    const response = await axios.get(API_URL + "/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const createCategory = async (categoryData) => {
  try {
    const response = await axios.post(API_URL + "/categories", categoryData);
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};
