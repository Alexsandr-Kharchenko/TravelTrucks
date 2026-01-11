TravelTrucks – Camper Rental Service TravelTrucks is a modern web application
designed for camper rentals. This platform allows travelers to explore a wide
range of campers, filter them by specific amenities, view detailed
specifications and user reviews, and book their next adventure online.

Main Features Home Page: Features a hero banner with a clear Call-to-Action
(CTA) "View Now" leading to the catalog.

Camper Catalog: A comprehensive list of available vehicles with "Load More"
pagination.

Advanced Backend Filtering:

Search by Location.

Filter by Vehicle Type (Panel truck, Fully Integrated, Alcove).

Filter by Amenities (AC, Kitchen, TV, Bathroom, etc.).

Favorites System: Users can save campers to a favorites list. The state is
persisted using LocalStorage, so your choices remain after a page refresh.

Detailed Camper Page:

Dynamic image gallery.

Tabbed interface: Features (specs) and Reviews (with a 5-star rating system).

Detailed specs: Transmission, Engine, Tank, Consumption, and more.

Booking Form: Integrated booking system with form validation and success
notifications (Toasts).

🛠 Tech Stack Framework: Next.js 14+ (App Router)

Language: TypeScript

State Management: Zustand (with persist middleware)

Data Fetching: Axios

Styling: CSS Modules

UI Components: React Icons / SVG Sprites

Backend API: MockAPI

Project Structure Plaintext

/app # Next.js App Router (pages & layouts) /components # Reusable UI components
(Card, Filters, BookingForm, Loader) /store # Zustand store for global state
management /services # Axios instance and API request functions /types #
TypeScript interfaces and shared types /styles # Global styles and CSS variables
/assets # Static assets (icons, images) ⚙️ Installation & Setup Clone the
repository:

Bash

git clone https://github.com/your-username/travel-trucks.git cd travel-trucks
Install dependencies:

Bash

npm install

# or

yarn install Run the development server:

Bash

npm run dev

# or

yarn dev View the app: Open http://localhost:3000 in your browser.

Implementation Details Backend Sync: Filtering is performed strictly on the
server side via query parameters to ensure performance.

Clean UI: Prices are formatted to display with decimals (e.g., 8000.00) as per
the requirements.

State Reset: When new filters are applied, the previous search results are
cleared to ensure data accuracy.

Performance: Implemented next/font for optimized typography and responsive
layouts for desktop users.

UX: Loading states (loaders) are provided for all asynchronous operations.

Author [Your Name] This project was developed as a technical assessment for the
TravelTrucks frontend position.

Links Live Demo: https://your-project-link.vercel.app

GitHub Repository: https://github.com/your-username/travel-trucks
