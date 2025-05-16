# 🍕 Fast React Pizza Co.

**A Simple Pizza Ordering App**

---

## 📋 Description

Welcome to **Fast React Pizza Co.**, a user-friendly React application designed to simplify your pizza ordering experience. Built with modern tools like **React Router**, **Redux Toolkit**, and **TailwindCSS**, this app offers a smooth and responsive interface for browsing, customizing, and ordering your favorite pizzas.

---

## ⚙️ How It Works

Orders are submitted via a `POST` request containing user and order data. In return, the API generates a **unique order ID**, which is displayed to the user for future reference.

---

## ✨ Features

- **🚫 No Account Required**  
  Just enter your name and place your order—no logins or passwords needed.

- **📦 Dynamic Menu**  
  Menu items are fetched from an API so you always see the latest options.

- **🛒 Easy Ordering**  
  Add multiple pizzas to your cart and finalize your order with a name, phone, and address. Optionally, share your GPS location for faster delivery.

- **⚡ Priority Orders**  
  Need your pizza faster? Mark your order as *priority* for an extra 20% charge.

- **🔁 Post-Order Modifications**  
  You can still mark an existing order as *priority* after it’s placed.

- **💳 Payment on Delivery**  
  No online payments—just pay when your pizza arrives!

- **🆔 Unique Order ID**  
  Each order gets a unique ID so it can be looked up easily later.

---

## 🧭 Pages

| Page                 | Path              |
|----------------------|------------------|
| Homepage             | `/`              |
| Pizza Menu           | `/menu`          |
| Cart                 | `/cart`          |
| New Order            | `/order/new`     |
| Lookup Order         | `/order/:orderID`|

---

## 🧠 State Management

- **User:** Global UI state (no account system)
- **Menu:** Global remote state (fetched from API)
- **Cart:** Global UI state
- **Order:** Global remote state (submitted to and retrieved from API)

---

## 🛠️ Technologies Used

- **Frontend Framework:** React
- **Routing:** React Router
- **Styling:** TailwindCSS
- **Remote State Management:** React Router Loader/Action APIs
- **Global State Management:** Redux Toolkit


