# **Edu Resources**

A platform for educators to share valuable coding tools, guides, and materials, and for learners to browse and discover the best resources to enhance their coding skills.

## **Features**

* **For Educators:** Share your educational tools, courses, tutorials, and materials with the learning community.
* **For Learners:** Browse curated coding resources, including courses, guides, tutorials, and more to start or advance your coding journey.
* **CRUD Functionality:** Add, edit, and remove resources to keep the library up to date.
* **Search & Filter:** Easily search for resources based on categories, skill levels, and more.

## **Tech Stack**

* **Frontend:** React.js
* **Backend:** JSON Server API (serving 9 mock educational resources)
* **Routing:** React Router DOM
* **State Management:** React`useState`
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
cd coding-resources-hub
npm install
```

### 3. Start the JSON Server (API)

For development purposes, run the mock API with the following:

<pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy code</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npx json-server --watch content.json --port 8000
</code></div></div></pre>

The mock API should now be available at `http://localhost:8000`.

### 4. Run the application

Start the application locally:

<pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1" aria-label="Copy"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy code</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run dev
</code></div></div></pre>

The app should now be running at `http://localhost:4444`.

## **How It Works**

### **For Educators:**

Educators can add their educational materials, guides, and courses by clicking "Add Content." Each resource can include details like title, description, type (course, tutorial, etc.), and more.

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
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a pull request
