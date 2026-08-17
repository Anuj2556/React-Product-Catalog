# Product List React

A modern, responsive React application for browsing and filtering products with pagination support.

## Features

- **Product Search**: Search products by title in real-time
- **Price Sorting**: Sort products from low to high or high to low price
- **Category Filtering**: Filter products by category (Beauty, Fragrances, Furniture, Groceries)
- **Pagination**: Browse products with 3 items per page
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Data**: Fetches product data from DummyJSON API

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API requests
- **CSS** - Styling

## Project Structure

```
src/
├── App.jsx              # Main component with search and filter logic
├── App.css              # Application styles
├── main.jsx             # Entry point
└── Compo/
    ├── Pagination.jsx   # Pagination component for product display
    └── useFetchData.jsx # Custom hook for fetching product data
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

## API

Products are fetched from [DummyJSON API](https://dummyjson.com/products)

## Component Details

### App.jsx
Main component handling:
- Search functionality
- Price sorting (Low to High / High to Low)
- Category filtering
- State management

### Pagination.jsx
Displays products in paginated format:
- Shows 3 products per page
- Previous/Next navigation
- Page indicator

### useFetchData.jsx
Custom React hook:
- Fetches products from DummyJSON API on mount
- Returns array of products

## Future Enhancements

- Add product detail page
- Implement shopping cart functionality
- Add user authentication
- Include product reviews and ratings
- Optimize performance with lazy loading
