# Prerequisites

Node.js (v14 or above)
npm or yarn

# Clone the repository

`git clone https://github.com/Ashirwad-Infotech/community-post.git`
cd community-post

## Install Dependencies

npm install

## Run the React App npm start

`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder structure

COMMUNITY-PAGE/
│
├── public/
│ ├── index.html
│ ├── manifest.json
│ ├── robots.txt
│
├── src/
│ ├── appBar/
│ │ ├── MobileMenu.tsx
│ │ ├── Sidebar.tsx
│ │
│ ├── components/
│ │ ├── Comments.tsx
│ │ ├── NestedComments.tsx
│ │ ├── PostCards.tsx
│ │ ├── PostCreationModal.tsx
│ │
│ ├── context/
│ │ ├── BasicProvider.tsx
│ │
│ ├── hooks/
│ │ ├── usePost.ts
│ │
│ ├── images/
│ │ ├── nopost.png
│ │
│ ├── page/
│ │ ├── Post.tsx
│ │
│ ├── style/
│ │ ├── index.scss
│ │ ├── nestedComments.style.scss
│ │ ├── post.style.scss
│ │ ├── postform.style.scss
│ │ ├── sidebar.style.scss
│ │ ├── variables.style.scss
│ │
│ ├── types/
│ │ ├── types.ts
│ │
│ ├── utils/
│ │ ├── utils.ts
│ │ ├── App.test.tsx
│ │
│ ├── App.tsx
│ ├── index.ts
│ ├── logo.svg
│ ├── reportWebVitals.ts
│ ├── setupTests.ts
│
├── .gitignore
├── db.json
├── global.d.ts
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json

# Root Directory

.gitignore: Specifies files and directories to be ignored by Git.

db.json: Mock database file for local testing (e.g., with JSON server).

global.d.ts: Global TypeScript declarations for the project.

package-lock.json: Dependency tree lock file to ensure consistent installs.

package.json: Contains project metadata, scripts, and dependencies.

README.md: Documentation and instructions for the project.

tsconfig.json: Configuration file for TypeScript.

# public/

index.html: Base HTML file for the application.

manifest.json: Configuration for Progressive Web App (PWA) features.

robots.txt: File for controlling search engine indexing.

# src/

# appBar/

MobileMenu.tsx: Component for the mobile navigation menu.
Sidebar.tsx: Component for the sidebar navigation.

# components/

Comments.tsx: Component for rendering comments.
NestedComments.tsx: Component for managing nested comments functionality.
PostCards.tsx: UI component for displaying post previews resuseablem components.
PostCreationModal.tsx: Modal for creating new posts.

# context/

BasicProvider.tsx: Context provider for managing global application state.

# hooks/

usePost.ts: Custom hook for managing post-related logic line addPost , addnewnested comments or top-level comments .

# images/ imgaes for the application

# page/

Post.tsx: Component for rendering an individual post page.

# style/

index.scss: Global styles for the application.
nestedComments.style.scss: Styles specific to the NestedComments component.
post.style.scss: Styles for post components.
postform.style.scss: Styles for the PostCreationModal.
sidebar.style.scss: Sidebar component styles.
variables.style.scss: SCSS variables for maintaining consistent color variable styling across the app.

# types/

types.ts: Shared TypeScript interfaces and type definitions used throughout the app.

# utils/

utils.ts: Utility functions for common tasks base api url and user avtar UI components.

App.test.tsx: Unit tests for the main App component.
Root Files
App.tsx: Root component of the React application.
index.ts: Entry point for the application.
logo.svg: SVG logo for the app.

reportWebVitals.ts: File for monitoring application performance.

setupTests.ts: Configuration for setting up unit tests.
