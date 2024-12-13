# StreamList React Application

## Overview

StreamList is a React-based web application designed to provide a dynamic and user-friendly interface for managing navigation and user inputs. The app utilizes React Router for seamless page transitions and includes a basic form component on the homepage. This project lays the foundation for future pages to be developed in subsequent weeks.


## Features

### Navigation Bar

Links to four pages:

- StreamList (Homepage): Displays a functional form for user input.
- Movies Page: Placeholder for future development in Week 4.
- Cart Page: Placeholder for future development in Week 4.
- About Page: Placeholder for future development in Week 5.
Styled with CSS for a modern and intuitive user experience.

### StreamList Page (Homepage)

Functional form where users can:
    Input the name of a stream.
    Submit the form to log the input to the console.
    Reset the input field automatically after submission.
    Responsive Design

Application is styled with CSS for responsiveness and usability across devices.


## Technologies Used 
- Frontend Framework: React (created using create-react-app)
- Routing: React Router (react-router-dom)
- Styling: Cascading Style Sheets (CSS)

## Installation Instructions

1. Clone the repository:

    `git clone [repository link]`

    `cd streamlist-app`

2. Install dependencies:

    `npm install`

3. Start the development server:

    `npm start`

4. Open the app in your browser:
    Navigate to http://localhost:3000.


## Project Structure
src/

    components/
        StreamList.js // Homepage with a functional form
        
        Movies.js // Placeholder for Movies page
        
        Cart.js // Placeholder for Cart page
        
        About.js // Placeholder for About page
    
    styles.css  // Main CSS file
    
    index.js

    App.js   // Main application component

## How It Works

1. Navigation Bar

Implemented using BrowserRouter, Routes, and Link components from react-router-dom.
Allows seamless navigation between pages without reloading the page.

2. StreamList Form

Uses React’s useState to manage input.
Logs input to the console upon submission and clears the field for the next entry.

3. CSS Styling

Ensures a clean, modern look with hover effects and responsive design.