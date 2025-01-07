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

### Card Change

* [X] Redesign resource listing, show user who posted it by showing a little picture icon of the person who owns the resource

#### Add / Edit Page

* [X] Add optional and required fields (add)
* [X] Add optional and required fields (edit)
* [ ] Change * to html entity
* [ ] Change ' to html entity in my resources
* [X] Check if user matches resource user id before deleting

#### Mobile

* [X] Fix scroll
* [X] fix nav (dasiyui?) yes
* [X] fix filter
* [X] single resource listing is UGLAYYY, FIX IT!!! and make it responsive

#### Login

* [X] Now that it's deployed, sign in isnt working. fix.

#### Legacy Resources

* [X] Import existing posts to Jj's account****

#### Misc

* [ ] Get new fav icon
* [ ] Local passport integration
* [X] my resources, truncate text to 90 characters like on homepage (reused ResourceListing component for this)
* [ ] change categories list to tags so you can select (on filter) multiple, and resources can have multiple categories.
* [ ] make lists shareable
* [X] anims for certain elements
* [ ] pagination for my resources (24 per page)
* [X] pagination working with filter on resource page
* [ ] MOVE MY CAR!!!
* [ ] push items under line is resourcelisting to be on the bottom no matter what

#### Hosting

* [X] Change ALL links for localhost:5000
* [X] Change ALL links for localhost:4444
* [X] Change .env in backend and frontend -> VITE_API_URL and VITE_BASE_URL and PORT (backend)
* [X] Hosting backend separately or no ????? probably. YES

### FUTURE UPDATES:

* [ ] People can create lists (like GitHub w/ stars, create a list and add resources to a list)
* [ ] Resources can be public or private
* [X] fix filter to work with pagination
* [ ] Profiles: click icon to view someone's public profile (will only show public resources and lists)
* [ ] Add more resource types
* [ ] Implement character limits on form for each category.
* [ ] Add more categories: Documentation
* [ ] Redirect loading back to homepage (rn its success = true), using AuthContext
* [ ] read for duplicates, resource already exists something like that

### ERRORS OR FUTURE FIXES

* [ ] aos interfering with hover on resourcelisting
* [ ] might be more useful to see the user who uploaded it, and maybe have the creator of the resource showing somewhere smaller

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
