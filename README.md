# 📒 Contact Manager Backend API

Welcome to the Contact Manager Backend API project! Here, I've harnessed the power of Express and MongoDB to craft an application where users can effortlessly sign up, log in, and manage their contacts.

## 🌟 Features

- **User Registration**: An intuitive way for new users to join.
- **User Login**: Swift login mechanism along with a JWT for a smooth user experience.
- **Contact Management**: Effortlessly manage your contacts. This includes:
  - Viewing all contacts linked to a user.
  - Fetching specific contacts.
  - Adding new contacts.
  - Updating existing contact details.
  - Deleting contacts when necessary.

## 📚 Tech Stack & Libraries

- **Express**: Our trusty web framework ensuring optimal routing and middleware handling.
- **MongoDB and Mongoose**: Handling our database needs and elegant schema modeling.
- **bcrypt**: Ensuring our users' passwords are securely hashed.
- **jsonwebtoken (JWT)**: Taking care of user authentication and session management.
- **dotenv**: Efficiently managing environment variables.

## 👩‍💻 Developer's Note

This project was an endeavor to learn and showcase the depth of backend development using some of the most trusted tools and libraries in the JavaScript ecosystem. It was an enriching experience, and I look forward to improving upon this and undertaking more such projects.

## 💡 Feedback and Contributions

Open to suggestions, bugs, feature requests, and more. Feel free to reach out or open an issue!

## 🚀 Get Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) - Local installation or you can use a cloud instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Setup and Installation

1. **Clone the repository**

   ```bash
   git clone [Your repository link here]
   cd [Your project directory name]

   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Create a `.env` file in the root of your project directory:**

````bash
touch .env

4. **Add the following environment variables to your `.env` file:**

```bash
PORT=5000
MONGO_URI=[Your MongoDB URI]
JWT_SECRET=[Your JWT Secret]
````

5. **Start the server**

```bash
npm start
```

6. **You're all set!** You can now test the API using [Postman](https://www.postman.com/) or any other API testing tool of your choice.
