# Ethereum Block Explorer

A real-time Ethereum block explorer built with React and Alchemy SDK that allows users to view block information from the Ethereum mainnet.

## Features

- Real-time block data fetching using WebSocket connections
- View detailed block information including:
  - Block number
  - Block hash
  - Timestamp
  - Miner address
  - Transaction count
  - Gas used
  - Gas limit
  - Base fee per gas
- Search for specific blocks by number
- Automatic reconnection handling
- Error handling and display
- Responsive design with Tailwind CSS

## Tech Stack

- React
- Vite
- Alchemy SDK
- Tailwind CSS
- WebSocket for real-time updates

## Project Structure

```
src/
├── components/           # React components
│   ├── BlockDisplay.jsx  # Block information display
│   ├── BlockSearch.jsx   # Block search interface
│   └── ErrorMessage.jsx  # Error message display
├── config/              # Configuration files
│   ├── alchemy.js       # Alchemy SDK configuration
│   └── constants.js     # Application constants
├── hooks/               # Custom React hooks
│   └── useBlockData.js  # Block data fetching hook
├── services/            # Service layer
│   └── blockService.js  # Block data service
├── utils/              # Utility functions
│   ├── blockUtils.js   # Block data formatting
│   ├── dateUtils.js    # Date formatting utilities
│   └── logger.js       # Logging utility
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Alchemy API key:
   ```
   ALCHEMY_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `ALCHEMY_API_KEY`: Your Alchemy API key for accessing the Ethereum network

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Best Practices Implemented

- Component-based architecture
- Custom hooks for data fetching
- Service layer for API interactions
- Utility functions for reusable logic
- Error boundary implementation
- WebSocket connection management
- Proper TypeScript/JSDoc documentation
- Responsive design patterns
- Environment variable usage

## Error Handling

The application implements comprehensive error handling:
- WebSocket connection errors
- Block fetching failures
- Invalid block numbers
- Network issues

## Performance Optimizations

- WebSocket for real-time updates
- Efficient state management
- Memoized components
- Tailwind CSS for optimized styling
- Batched updates for better performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request
