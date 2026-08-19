# Product Dashboard React

A responsive React product dashboard with list and detail routes, URL-backed filters, and pagination.

## Features

- **Product Search**: Search products by title in real-time
- **Price Sorting**: Sort products from low to high or high to low price
- **Category Filtering**: Filter products by category (Beauty, Fragrances, Furniture, Groceries)
- **Pagination**: Browse products with 3 items per page
- **Product Details**: Open an individual product at `/products/:id`
- **Query-Param Filters**: Search, category, and sort values are preserved in the URL
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Data**: Fetches product data from DummyJSON API

## Tech Stack

- **React** - UI library
- **React Router** - List and detail routes with URL parameters
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API requests
- **CSS** - Styling

## Project Structure

```
src/
├── App.jsx              # Application routes
├── App.css              # Application styles
├── main.jsx             # Entry point and BrowserRouter setup
└── Compo/
    ├── Pagination.jsx     # Product pagination and display
    ├── ProductDetail.jsx   # Individual product detail view
    ├── ProductList.jsx     # List view and query-param filters
    └── useFetchData.jsx    # Custom hook for fetching product data
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

## Routes and Filters

| Route | Description |
| --- | --- |
| `/products` | Product list dashboard |
| `/products/:id` | Detail page for a product |

The list supports these query parameters:

- `search`: Search by product title
- `category`: Filter by category
- `sort`: Use `low` for low-to-high prices or `high` for high-to-low prices
- `page`: Reserved for pagination URL state

Example:

```text
/products?search=phone&category=beauty&sort=low
```

## API

Products are fetched from [DummyJSON API](https://dummyjson.com/products)

## Component Details

### App.jsx
Defines the product list, product detail, and fallback routes.

### ProductList.jsx
Reads search, category, and sorting values from the URL query parameters and renders the filtered list.

### ProductDetail.jsx
Reads the product id from the route and displays the matching product.

### Pagination.jsx
Displays products in paginated format:
- Shows 3 products per page
- Previous/Next navigation
- Page indicator

### useFetchData.jsx
Custom React hook:
- Fetches products from DummyJSON API on mount
- Returns array of products

## Possible Enhancements

- Implement shopping cart functionality
- Add user authentication
- Include product reviews and ratings
- Optimize performance with lazy loading
- Connect pagination state fully to the `page` query parameter
