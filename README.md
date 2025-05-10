# 🛒 BuddyMart Ecommerce Platform

**BuddyMart** is a full-stack ecommerce web application built with **React** and **Node.js**, designed to deliver a smooth and modern online shopping experience. The application includes essential ecommerce features and is structured for scalability and easy extension.

> 🚧 **Note:** This project is currently under development. Some features are incomplete or in progress, including full order management, cart functionality, and backend validation.

---

## ✨ Features

### ✅ Completed / Working
- **User Authentication**
  - Secure registration and login
  - JWT-based auth with role-based access (admin/user)

- **Product Catalog**
  - Display of products with name, price, description, and images

- **Category Management**
  - Admins can create, update, and delete categories

- **Product Management**
  - Admins can add, edit, and delete products

- **Responsive UI**
  - Clean and responsive design across all device sizes

- **Search & Filter**
  - Search bar and filtering by category and price

### 🔄 In Progress / To Be Implemented
- Full **shopping cart functionality**
- **Order processing & history**
- **User profile pages**
- **Review submission system**
- **Payment gateway integration**
- **Backend validations and error handling improvements**

---

## 🧰 Tech Stack

### 🔹 Frontend
- React
- React Router
- Axios
- Slick Carousel
- CSS

### 🔹 Backend
- Node.js
- Express
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- Bcrypt (Password hashing)
- CORS
- Dotenv

---

## 🛠️ Getting Started

Follow the steps below to set up and run the **BuddyMart** ecommerce project locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/buddymart.git
cd buddymart
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Backend Server

```bash
nodemon server.js
```

### 5. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 6. Start the Frontend App

```bash
npm start
```
