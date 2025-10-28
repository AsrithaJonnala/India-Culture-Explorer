Okay, here is the detailed `README.md` content again, with all image references removed as requested. You can copy and paste this directly into your GitHub `README.md` file.

````markdown
# India-Culture-Explorer 🇮🇳✨

A visually immersive React web application designed to explore the rich cultural diversity of Indian states, now featuring user authentication. This project demonstrates modern front-end development practices with React, connecting to a separate Node.js backend.

**[Live Demo](https://india-culture-explorer.netlify.app/)** 🚀

---

## About The Project

India-Culture-Explorer is an interactive digital encyclopedia that allows users to embark on a visual journey through the heritage of India. Users can register and log in to explore detailed information for various Indian states, including famous food, traditional dance forms (with GIFs), cultural outfits, and major tourist destinations.

The motivation was to create a single, beautiful, and modern platform for cultural exploration, built with a modern tech stack. The user experience begins with an engaging animated homepage, leading to a gallery of all states (accessible after login). From there, users can dive deep into any state to discover its unique cultural aspects.

---

## Core Features

* **User Authentication:** Secure user registration and login functionality handled by a separate Node.js/Express backend connected to MongoDB Atlas using password hashing (bcryptjs).
* **Multi-Page Navigation:** A seamless user experience with distinct pages for Home, Login, Register, States Gallery, and State Details, powered by React Router.
* **Protected Content:** Access to the "Explore States" gallery and individual State Detail pages is granted only after successful login.
* **Dynamic Content (States):** State information is rendered dynamically. Currently, this data is sourced from a `data.js` file within the frontend project, with plans to migrate this data fetching to the backend API in the future for better scalability.
* **Interactive UI:** Smooth animations on page loads, hover effects on state cards, and an animated homepage background create an attractive and modern user experience, built with Framer Motion.
* **Responsive Design:** The layout is optimized using CSS Flexbox/Grid for a great experience on both desktop and mobile devices.

---

## Tech Stack

### Frontend (This Repository)

* **[React.js](https://reactjs.org/):** Core library for building the component-based user interface.
* **[React Router](https://reactrouter.com/):** For handling client-side routing, navigation, and dynamic route parameters (`useParams`).
* **[Framer Motion](https://www.framer.com/motion/):** For creating declarative animations and page transitions.
* **[Axios](https://axios-http.com/):** For making asynchronous HTTP requests to the backend API (for login/registration).
* **CSS:** For custom styling, layout (Flexbox/Grid), and responsiveness.
* **JavaScript (ES6+):** For component logic, data mapping (`.map`), and asynchronous operations (`async/await`).

### Backend (Separate Repository - Required to Run)

* **[Node.js](https://nodejs.org/):** JavaScript runtime environment for the server.
* **[Express](https://expressjs.com/):** Web framework for building the REST API endpoints.
* **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas):** Cloud-hosted NoSQL database for storing user credentials.
* **[Mongoose](https://mongoosejs.com/):** Object Data Modeling (ODM) library for MongoDB and Node.js, used for schema definition and data validation.
* **[bcryptjs](https://www.npmjs.com/package/bcryptjs):** Library for securely hashing user passwords before storing them.
* **[dotenv](https://www.npmjs.com/package/dotenv):** For loading environment variables (like the database connection string) from a `.env` file.
* **[cors](https://www.npmjs.com/package/cors):** Middleware to enable Cross-Origin Resource Sharing, allowing the frontend (on a different port) to communicate with the backend.

---

## Getting Started

To get both the frontend and backend running locally, follow these steps.

### Prerequisites

* Node.js (v14 or later recommended) and npm installed.
* Git installed.
* A MongoDB Atlas account with a cluster created, a database user configured, and network access allowed from your IP address.

### Backend Setup (Required First)

1.  Clone the backend repository (You'll need to create this repository separately and push your backend code):
    ```sh
    git clone [https://github.com/YourUsername/YourBackendRepoName.git](https://github.com/YourUsername/YourBackendRepoName.git)
    cd YourBackendRepoName
    ```
2.  Install backend dependencies:
    ```sh
    npm install
    ```
3.  Create a `.env` file in the backend root directory.
4.  Add your MongoDB Atlas connection string to the `.env` file. Ensure you replace placeholders with your actual database user credentials and database name:
    ```
    MONGO_URI=mongodb+srv://YourUser:YourPassword@yourcluster.xxxxx.mongodb.net/YourDBName?retryWrites=true&w=majority
    ```
5.  Start the backend server:
    ```sh
    npm start
    ```
    *(The backend should now be running, typically on `http://localhost:5001`)*

### Frontend Setup (This Repository)

1.  Clone this repository:
    ```sh
    git clone [https://github.com/AsrithaJonnala/India-Culture-Explorer.git](https://github.com/AsrithaJonnala/India-Culture-Explorer.git)
    cd India-Culture-Explorer
    ```
    *(Adjust folder name if needed based on your local setup)*
2.  Install frontend dependencies:
    ```sh
    npm install
    ```
3.  Start the frontend development server:
    ```sh
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser. You can now register and log in to explore the states!
````
