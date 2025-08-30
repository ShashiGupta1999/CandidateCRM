## How to Run the CandidateCRM Project

### 1. Clone the Repository
Download the project code from GitHub:
```powershell
git clone <repository-url>
```
Replace `<repository-url>` with the actual link of the repository.

### 2. Go to the Project Folder
```powershell
cd CandidateCRM
```

### 3. Install Node.js (if not installed)
Check your Node.js version:
```powershell
node -v
```
If you see an error or the version is not compatible, install Node Version Manager (nvm) and use the required version.

#### Install nvm (Windows)
Download from: https://github.com/coreybutler/nvm-windows

#### Use nvm to install Node.js
```powershell
nvm install <version>
nvm use <version>
```
Replace `<version>` with the version needed for the project (check `package.json` or ask your mentor).

### 4. Install Project Dependencies
```powershell
npm install
```
This will install all the required packages.

### 5. Install JSON Server Globally (if not installed)
```powershell
npm install -g json-server
```

### 6. Start JSON Server
```powershell
json-server --watch src/db.json --port 3000
```
This will start a fake backend server.

### 7. Start the Project
```powershell
npm run dev
```
This will start the frontend application.

---

**Now open your browser and go to** `http://localhost:5173` **to see the project running.**

If you face any errors, read the error message carefully and follow the instructions.

***************************************************************************************

Component-Based Layout Design

Initially, I analyzed the overall layout and strategically divided it into distinct sections using a grid system. The main structure consists of a main container and a content container. Within the main container, I placed the sidebar and topbar for navigation and quick access. The content container is further organized into individual components, including Candidate Profile, Breadcrumb, Skills, Job Details, and Notes. This modular approach ensures a clean, maintainable, and scalable layout, with each functional area encapsulated in its own component.

CandidateCRM/
│
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── App.vue
│   ├── db.json
│   ├── main.ts
│   ├── style.css
│   ├── vite-env.d.ts
│   │
│   ├── api/
│   │   └── candidateApi.ts
│   │
│   ├── assets/
│   │   ├── vue.svg
│   │   └── images/
│   │       ├── logo.png
│   │       ├── profile.png
│   │       └── user.png
│   │
│   ├── components/
│   │   ├── HelloWorld.vue
│   │   └── Layout/
│   │       ├── AssignedJob.vue
│   │       ├── breadcrumb.vue
│   │       ├── CandidateContent.vue
│   │       ├── CandidateProfile.vue
│   │       ├── ContactDetails.vue
│   │       ├── editCandidateForm.vue
│   │       ├── jobDetails.vue
│   │       ├── NoteCard.vue
│   │       ├── notes.vue
│   │       ├── sidebar.vue
│   │       ├── skillDetails.vue
│   │       └── topbar.vue
│   │
│   ├── composable/
│   │   └── useEditModel.ts
│   │
│   ├── modal/
│   │   └── candidateModal.ts
│   │
│   └── stores/
│       └── candidate.ts

***************************************************************************************************************

How the CandidateCRM Project Works
-----------------------------------

1. Building the UI
I created the user interface (UI) using HTML, Vanilla CSS, SCSS, and Vue 3.
The UI is divided into different components for better organization, such as profile, contact details, skills, and job details.
2. Edit Functionality
For editing candidate information, I made a special edit form.
This form allows users to update profile, contact, and skill details.
3. Data Management with JSON Server
I used JSON Server to act as a fake backend. It stores all candidate data in a file (db.json).
When you edit and submit the form, the updated data is sent to JSON Server, which saves the changes.
4. State Management with Pinia
I used Pinia for state management. Pinia helps keep track of candidate data across the app.
When the app loads (using onMounted in Vue), it fetches the latest data from JSON Server and stores it in Pinia.
This way, even if you refresh the browser, the app always shows the latest data from the server.
5. How Technologies Are Used
HTML & CSS/SCSS: For building and styling the UI.
Vue 3: For creating interactive components and handling user actions.
JSON Server: For storing and updating candidate data.
Pinia: For managing and sharing data between components.
onMounted (Vue): To fetch data from the server when the app starts.

___________________________________________________________________________________

Simple Steps of How It Works
-----------------------------
User opens the app and sees candidate details (fetched from JSON Server).
User clicks "Edit" and updates information in the form.
On submit, the app sends the new data to JSON Server and updates the state in Pinia.
The UI automatically shows the updated data.
If the page is refreshed, the app fetches the latest data from JSON Server and displays it.

****************************************************************************************************************************

Documentation outlining the approach, challenges faced, and solutions implemented.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Approach(workspace)
-------------------
Tech Used: Vue 3 (for UI), TypeScript (for safe coding), Pinia (for saving data), Vite (for fast running).
How Data Works: Candidate info is saved and managed using Pinia. Data is fetched and updated using simple API functions.
Code Structure: The app is split into small, reusable parts (components) like profile, sidebar, and forms.
Styling: Each part has its own style for a neat look.


State Management: Used Pinia for global state, specifically for candidate data (src/stores/candidate.ts).
API Integration: Created API functions for fetching and updating candidate data (src/api/candidateApi.ts).
Type Safety: Defined a comprehensive Candidate interface for strong typing across the app.
Component Structure: Modularized UI into reusable components (e.g., CandidateProfile, EditCandidateForm, sidebar).
Styling: Used scoped SCSS for component styles.

Challenges Faced
-----------------

TypeScript Errors:
Implicit any type for parameters: Occurred in API and store actions.
Spread types error: When spreading possibly undefined or non-object values.
Type mismatch (unknown not assignable): API responses needed explicit typing.
Incorrect import paths: TypeScript couldn't resolve some modules due to path or extension issues.

Reactivity Issues:
Confusion between ref and reactive usage in forms, leading to .value property errors.

Component Communication:
Passing props and handling modal visibility for editing candidate details.
Solutions Implemented

Type Annotations:
Added explicit type annotations to all function parameters and API responses

Correct Imports:
Ensured all imports use correct relative paths and omit .ts extensions

Safe Object Spread:
Used fallback objects when spreading API results to avoid runtime 

Consistent Typing:
Centralized the Candidate interface and imported it wherever needed.

Form Reactivity:
Used ref for form state and accessed properties via .value in script, but directly in template.

Component Props:
Used defineProps and composables for modal control and prop passing.

---------------------------------------------------------------------------------------------------------------------------------------------

Sidebar Responsive Layout: Approach, Challenges & Solutions

Approach
-----------

Used a fixed sidebar (position: fixed; left: 0; top: 0;) with a width of 56px and full viewport height (height: 100vh).
Sidebar content (icons) is structured as a vertical list (flex-direction: column) for desktop.
For mobile (max-width: 600px), sidebar switches to a horizontal row (flex-direction: row), spans full width (width: 100vw), and reduces height (height: 48px).
All icons are centered using align-items: center and justify-content: center in both layouts.
Challenges Faced
Vertical Centering of Icons (Desktop):

Initial use of align-items: flex-start caused icons to stick to the top.
Needed icons to be vertically centered within the sidebar.
Horizontal Centering (Mobile):

Icons were not perfectly centered and sometimes stuck to the edges.
Required additional padding and centering logic for mobile view.
Unwanted Margin/Padding:

Default browser styles on ul and li added extra space.
Had to explicitly set margin: 0; padding: 0; and use !important for overrides.
Sidebar Overlap and Scroll Issues:

Sidebar sometimes caused horizontal scroll due to fixed width and positioning.
Ensured overflow-x: hidden on main container and body.

Solutions Implemented
-------------------------

Vertical Centering (Desktop):
Changed align-items: flex-start to align-items: center and added justify-content: center to .sidebar and ul.
Horizontal Centering (Mobile):
Used flex-direction: row and justify-content: center for .sidebar and ul in mobile media query.
Added horizontal padding to prevent icons from sticking to the edges.
Removed Extra Margin/Padding:
Set margin: 0; padding: 0; for .sidebar, nav, ul, and li.
Used !important for mobile overrides to ensure styles apply.
Full Height Sidebar:
Used height: 100vh and position: fixed for sidebar to always fill the screen height.
No Horizontal Scroll:
Added overflow-x: hidden to main container and body.
Result
Sidebar is fully responsive: vertical on desktop, horizontal on mobile.
Icons are perfectly centered in both layouts.
No unwanted scroll bars or cut-off content.
Clean, consistent appearance across screen sizes.
