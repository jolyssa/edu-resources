# **Still TO DO:**

#### Filter on ResourceListings.jsx

* [X] Fix filter: make it work.
* [X] Fix filter: margins on x axis, fit with resources.

#### Add Resources Route /add-resources

* [X] Add resources: if not signed in, redirect to login page
* [X] Edit resources: the same
* [X] addResources button: homecards and navbar
* [X] Protect addResource, editResource, and my Resources in App
* [ ] Protect edit resource in the backend (having trouble)

#### Add / Edit Page

* [X] Add optional and required fields (add)
* [X] Add optional and required fields (edit)
* [ ] Change * to html entity
* [ ] Change ' to html entity in my resources

#### Legacy Resources

* [ ] Import existing posts to Jj's account****

#### Misc

* [ ] Get new fav icon
* [ ] Local passport integration
* [X] my resources, truncate text to 90 characters like on homepage (reused ResourceListing component for this)
* [ ] change categories list to tags so you can select (on filter) multiple, and resources can have multiple categories.

#### Hosting

* [ ] Change ALL links for localhost:5000
* [ ] Change ALL links for localhost:4444
* [ ] Change .env in backend and frontend -> VITE_API_URL and VITE_BASE_URL and PORT (backend)
* [ ] Hosting backend separately or no ????? probably.

### FUTURE UPDATES:

* [ ] People can create lists (like GitHub w/ stars, create a list and add resources to a list)

▸ 📂 convex         # Backend queries, mutations, and schema definitions
▸ 📂 public         # Images, favicons, and other unprocessed assets
▾ 📂 src            # Frontend application
▾ 📂 components   # Shared components
▸ 📂 app        # App-related global components (logos, sidebar, etc.)
▸ 📂 common     # Design system components from React Aria
▸ 📂 quests     # Feature-specific quest components
▸ 📂 routes       # File-based routing using TanStack Router
▸ 📂 styles       # Global CSS (not much here; most of it's in Tailwind!)
📄 main.tsx     # Base of the project including common Providers
▸ 📂 tests          # End-to-end Playwright tests
