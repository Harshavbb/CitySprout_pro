#  CitySprout

**Cultivating greener cities, one space at a time.**

CitySprout is a premium, AI-powered platform designed to transform unused urban spaces—like concrete rooftops, empty balconies, and vacant lots—into thriving green farms. By combining intelligent space analysis with expert booking services, CitySprout makes sustainable urban farming accessible, beautiful, and highly efficient.

---

##  Key Features

*   **AI Space Analyzer:** Upload a photo of your available space, configure sunlight and water parameters, and receive an intelligent, AI-generated farming strategy tailored to your environment.
*   **Expert Consultations:** A premium concierge ledger allowing users to book certified agronomists and landscape experts for hands-on assistance.
*   **Secure Authentication:** Seamless user onboarding with JWT-based login, signup, and session management.
*   **Editorial User Profiles:** A clean, magazine-style dashboard for users to manage their personal information and platform settings.
*   **Premium UI/UX:** Built with a luxe, minimalist architectural design system, featuring fluid animations, structural grids, and a harmonious earthy color palette.

---

## Tech Stack

**Frontend:**
*   [React 18](https://reactjs.org/) - UI Library
*   [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
*   [Material UI (MUI)](https://mui.com/) - Component Library & Design System
*   [Framer Motion](https://www.framer.com/motion/) - Fluid UI Animations
*   [React Router](https://reactrouter.com/) - Client-side Routing
*   [Axios](https://axios-http.com/) - HTTP Client

**Backend (API):**
*   Node.js & Express
*   MongoDB (Database)
*   AI Integration (for Space Analysis)

---

## Getting Started

Follow these steps to run the CitySprout frontend on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/citysprout-frontend.git](https://github.com/your-username/citysprout-frontend.git)
   cd citysprout-frontend

   npm install

2. Set up Environment Variables:
    Create a .env file in the root directory and add your backend API URL (and any other necessary keys):
   ```bash
    VITE_API_URL=http://localhost:5000

Project Structure:
```bash
src/
├── assets/        # Images, illustrations, and static assets
├── components/    # Reusable UI components (Hero, Features, Footer, etc.)
├── config/        # Global configurations (API routes, theme settings)
├── pages/         # Top-level page components (About, Profile, Services)
├── App.jsx        # Root application and route definitions
└── main.jsx       # React DOM rendering and global context providers

