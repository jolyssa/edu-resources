# **Edu Resources**

A platform for educators to share valuable coding tools, guides, and materials, and for learners to browse and discover the best resources to enhance their coding skills.

## **Features**

* **For Educators:** Share your educational tools, courses, tutorials, and materials with the learning community.
* **For Learners:** Browse curated coding resources, including courses, guides, tutorials, and more to start or advance your coding journey.
* **CRUD Functionality:** Add, edit, and remove resources to keep the library up to date.
* **Search & Filter:** Easily search for resources based on categories, skill levels, and more.

## **Tech Stack**

* **Frontend:** React.js
* **Backend:** JSON Server API
* **Routing:** React Router DOM
* **State Management:** React `useState`
* **Styling:** Tailwind CSS
* **Dev Tools:** Vite, ESLint, PostCSS

## **Dependencies**

### **Main Dependencies:**

```json
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-icons": "^5.4.0",
"react-router-dom": "^7.0.2",
"react-spinners": "^0.15.0",
"react-toastify": "^11.0.2"
```

### **Development Dependencies:**

```json
"@eslint/js": "^9.15.0",
"@types/react": "^18.3.12",
"@types/react-dom": "^18.3.1",
"@vitejs/plugin-react": "^4.3.4",
"autoprefixer": "^10.4.20",
"eslint": "^9.15.0",
"eslint-plugin-react": "^7.37.2",
"eslint-plugin-react-hooks": "^5.0.0",
"eslint-plugin-react-refresh": "^0.4.14",
"globals": "^15.12.0",
"json-server": "^1.0.0-beta.3",
"postcss": "^8.4.49",
"tailwindcss": "^3.4.16",
"vite": "^6.0.1"
```

## **Getting Started**

### 1. Clone the repository

`git clone https://github.com/jolyssa/edu-resources.git`

### 2. Install dependencies

Navigate to the project directory and install the necessary dependencies:

```js
cd edu-resources
npm install
```

### 3. Start the JSON Server (API)

For development purposes, run the mock API with the following:

`npm run server`

The mock API should now be available at `http://localhost:8000`.

### 4. Run the application

Start the application locally:

`npm run dev`

The app should now be running at `http://localhost:4444`.

## **How It Works**

### **For Educators:**

Educators can add their educational materials, guides, and courses by clicking "Add Content". Each resource can include details like title, description, type (course, tutorial, etc.), and more.

### **For Learners:**

Learners can browse through a list of curated resources to find the perfect content based on their skill level and interests.

### **CRUD Operations:**

* **Add a Resource:** Create new educational tools or content for others to access.
* **Edit a Resource:** Modify existing resources to ensure they are up-to-date.
* **Delete a Resource:** Remove outdated or irrelevant resources.

### **Routing with React Router:**

This app uses **React Router** to handle navigation between different pages, such as the home page, the "Add Resource" page, and individual resource detail pages.

### **State Management with React `useState`:**

State is managed using React's `useState` hook to dynamically render data (e.g., resources) and handle updates across the app.

### **Styling with Tailwind CSS:**

The app uses **Tailwind CSS** for styling, providing a fast and efficient way to design responsive, customisable user interfaces.

## **Contributing**

I welcome contributions to improve this platform! If you'd like to help, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a pull request
