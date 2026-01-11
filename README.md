# TravelTrucks

[Live Demo](https://travel-trucks-ypbk.vercel.app) |
[Source Code](https://github.com/Alexsandr-Kharchenko/TravelTrucks)

## Project Overview

TravelTrucks is a frontend web application for a camper rental company. Users
can browse available campers, filter by location, type, and features, add
favorites, view detailed camper information, read reviews, and book a camper.

The app is built with **Next.js + TypeScript**, uses **Zustand** for state
management, **Axios** for API requests, and **CSS Modules** for styling.

## Backend API

API Base URL:
[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

Endpoints:

- `GET /campers` – fetch all campers (backend filtering required)
- `GET /campers/:id` – fetch camper details by ID

## Main Features

### Home Page (`/`)

- Banner with call-to-action button **"View Now"**
- Redirects to the Catalog page

### Catalog Page (`/catalog`)

- Displays all available campers
- Filtering options:
  - Location (text input)
  - Camper type
  - Features: AC, kitchen, TV, radio, etc.
- Add campers to favorites
- Pagination with **Load More** button
- Navigate to camper details via **Show More**

### Camper Details Page (`/catalog/:id`)

- Detailed information:
  - **Features:** AC, kitchen, TV, radio, refrigerator, microwave, gas, water,
    transmission, engine
  - **Details:** Form, length, width, height, tank, consumption
- Photo gallery
- Tabs: Features (default) and Reviews
- Reviews with 5-star ratings
- Booking form with success notification

## Technologies Used

- Next.js – React framework for SSR/SSG
- TypeScript – static typing
- Zustand – global state management
- Axios – HTTP requests
- CSS Modules – component-level styling
- React Icons / SVG Sprite – icons

## Project Structure

## Installation & Running Locally

Clone the repository:

```bash
git clone https://github.com/Alexsandr-Kharchenko/TravelTrucks.git
cd TravelTrucks
```

npm install

# or

yarn install

npm run dev

# or

yarn dev

# or

pnpm dev
