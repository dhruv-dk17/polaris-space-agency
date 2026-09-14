# Polaris Space Agency - Website Project

This is a static, front-end web project for the "Polaris Space Agency." It is designed to be simple, fast, and responsive.

## 🛠️ How It Is Built

The website is a collection of static HTML pages linked together. It uses a clean, dark-themed space aesthetic. The codebase was built with a strict focus on minimalism and simplicity, keeping the HTML, CSS, and JavaScript files short and easily readable.

### Where and How Technologies Are Used:

*   **HTML**: Provides the structure for all pages. Each page has a consistent layout (Navbar -> Content -> Footer).
*   **Bootstrap 4.2.1**: Used extensively for responsive design, layout (Grids), typography, and pre-built UI components like the Navigation Bar, Buttons, and Forms. This allowed us to keep our custom CSS extremely short. Located locally in `bootstrap4.2.1/`.
*   **Custom CSS (`assets/css/style.css`)**: Used only for specific custom branding that Bootstrap doesn't provide out-of-the-box. This includes the dark space-themed backgrounds (`.calc-widget`), golden accent colors, and the hero section background image overlay.
*   **JavaScript (`assets/js/main.js`)**: Used exclusively for client-side form validation. The JS logic relies entirely on native browser features (like `alert()`, `indexOf()`, and `document.getElementById()`) to validate user inputs on the Registration, Sign In, and Contact forms before submission.

## 🗺️ Website Map

*   **`/index.html`** - **Home**: The landing page featuring a hero image, quick links to missions, and CTA buttons for logging in and registering.
*   **`/about.html`** - **About Us**: Information about the agency's history, vision, and leadership.
*   **`/missions.html`** - **Missions**: Details on current and past space missions (rockets, rovers, etc.).
*   **`/research.html`** - **Research**: Highlights of scientific research and astronomical discoveries.
*   **`/careers.html`** - **Careers**: Job portal listing open positions with an application form.
*   **`/contact.html`** - **Contact**: A contact form for users to send messages to the agency.
*   **`/register.html`** - **Create Account**: A sign-up form with JS validation for new users.
*   **`/login.html`** - **Sign In**: A login form with JS validation for returning users.
