Documentation outlining the approach, challenges faced, and solutions implemented.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Approach(workspace)
-------------------

Tech Stack: Vue 3, TypeScript, Pinia, Vite.
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
