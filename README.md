# Loan Calculator App

A React-based loan calculator application with features like amortization schedule generation and live currency exchange rates.

## Features

- Loan EMI calculation
- Amortization schedule generation
- Live currency exchange rates
- Dark/Light theme support
- Responsive design
- Virtual scrolling for large datasets
- Currency conversion between major currencies (USD, EUR, INR, CAD, GBP, JPY, AUD)

## Tech Stack

- React 19.1
- TypeScript
- Material UI (MUI) v7
- Vite
- React Router v7
- React Virtuoso
- Axios
- Sonner (for notifications)

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm/yarn/pnpm

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/ajeeshRS/loan-calculator.git
cd loan-calculator
```

2. Install dependencies
```bash
npm install
```

3. Environment Setup
- Create a `.env` file in the root directory
- Add your Exchange Rate API key:
```
VITE_EXCHANGE_RATE_API_URL=https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Route pages
│   ├── hooks/         # Custom hooks
│   ├── utils/         # Utility functions
│   └── assets/        # Static assets
├── public/            # Public assets
└── ...config files
```

## Features in Detail

### Loan Calculator
- Input loan amount, interest rate, and term
- Calculate EMI and generate amortization schedule
- Support for multiple currencies

### Exchange Rates
- Live currency conversion
- Support for major world currencies
- Real-time exchange rate data

### UI/UX
- Responsive design for all screen sizes
- Dark/Light theme toggle
- Virtualized table for better performance
- Toast notifications for errors/alerts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License