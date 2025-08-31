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

<img width="557" height="1197" alt="image" src="https://github.com/user-attachments/assets/126cfc4b-dbf6-40f3-809b-2f5e5c21b7cd" />
 <img width="509" height="987" alt="image" src="https://github.com/user-attachments/assets/bf17fb38-9f88-4bd2-be25-17db87893b23" />


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

## How the CandidateCRM Project Works
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

## Simple Steps of How It Works
-----------------------------
User opens the app and sees candidate details (fetched from JSON Server).
User clicks "Edit" and updates information in the form.
On submit, the app sends the new data to JSON Server and updates the state in Pinia.
The UI automatically shows the updated data.
If the page is refreshed, the app fetches the latest data from JSON Server and displays it.

****************************************************************************************************************************

## Documentation outlining the approach, challenges faced, and solutions implemented.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
# Approach
------------
Tech Used: Vue 3 (for UI), TypeScript (for safe coding), Pinia (for saving data), Vite (for fast running).
How Data Works: Candidate info is saved and managed using Pinia. Data is fetched and updated using simple API functions.
Code Structure: The app is split into small, reusable parts (components) like profile, sidebar, and forms.
Styling: Each part has its own style for a neat look.

# Challenges Faced & Solution
----------------------------

* Layout Design with Grid
--------------------------
Faced difficulty in dividing the layout.
Decided to use CSS Grid for structuring the main sections.
Benefit: Grid makes it easy to organize content into rows and columns, resulting in a clean and flexible layout.

* Edit Form Design
-----------------
To make the edit form user-friendly, I divided the fields into three sections: Basic Details, Contact Details, and Skill Details.
This separation improves clarity and makes the form easier to fill out.

* State Management for Edit Functionality
---------------------------------------
Used Pinia for state management to handle form data and updates.
Challenge: Data updated in the UI was lost after refreshing the page.
Reason: Pinia stores data temporarily in memory, so it resets on page reload.

* Using Fake API with JSON Server
----------------------------------
Implemented a fake API using JSON Server to save and fetch data from a JSON file.
Solution: On every page load, data is fetched from the API, ensuring the UI always shows the latest saved values.

* Responsiveness
---------------
Faced issues with sidebar and topbar overlapping, especially on mobile and iPhone views.
Solution: Used media queries and set the viewport meta tag in the index file to improve responsiveness.
Result: The layout now adapts better to different screen sizes

__________________________________________________________________________________________________________

## Approach(Test Enviornment)
--------------------------
Install Testing Tools

Chose Jest for unit testing.
Installed Jest, Babel-Jest, Vue-Jest, TS-Jest, and related dependencies.
Configure Jest

Created jest.config.cjs for compatibility with CommonJS.
Set up transforms for .vue and .ts files.
Mock APIs and Stores

Used Jest’s mocking functions to simulate API responses.
Created Pinia instances in tests to provide store context.
Write Test Cases

Wrote tests for component rendering, form validation, store actions, and API calls.


## Challenges & Solutions

* Dependency Conflicts
Challenge: Incompatible versions of Jest, Babel-Jest, Vue-Jest, TS-Jest, and TypeScript.
Solution: Installed specific compatible versions using --legacy-peer-deps and downgraded TypeScript to 4.x for TS-Jest compatibility.

* Jest Configuration Issues
Challenge: Errors with module.exports and missing test environments.
Solution: Used .cjs extension for Jest config and installed jest-environment-jsdom separately.

* TypeScript Integration
Challenge: Type errors for async/Promise and .vue modules.
Solution: Added "lib": ["ES2015", "DOM", "ESNext"] to tsconfig.json and a Vue shim file for type declarations.

* Pinia Store Usage in Tests
Challenge: “No active Pinia” error when using stores in tests.
Solution: Created and provided Pinia instance in each test using createPinia() and global.plugins.

* Mocking Global Objects
Challenge: TypeScript error for global.
Solution: Used globalThis instead of global for mocking fetch.

* API and Store Testing
Challenge: Testing async API calls and store updates.
Solution: Mocked API functions and verified store state changes after actions.