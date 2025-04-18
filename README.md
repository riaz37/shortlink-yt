# ShortLink - URL Shortener

A modern URL shortener built with Next.js 14, featuring URL safety checking, analytics, and user management.

## Features

- **URL Shortening**: Create short, custom links for any URL
- **Safety Checking**: Automated URL safety analysis using Google's Gemini AI
- **User Authentication**: 
  - Email/Password login
  - OAuth with GitHub and Google
  - Role-based access control (Admin/User)
- **Analytics**: Track clicks and usage statistics
- **Admin Dashboard**: 
  - Manage URLs and users
  - Review flagged URLs
  - Database management
- **Modern Stack**:
  - Next.js 14 with App Router
  - DrizzleORM with PostgreSQL
  - Tailwind CSS with shadcn/ui
  - TypeScript
  - NextAuth.js v5

## Prerequisites

- Node.js 18.18.0 or higher
- PostgreSQL database
- Google Gemini API key (for URL safety checking)
- GitHub OAuth credentials (optional)
- Google OAuth credentials (optional)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database"

# Auth Secret (Generate with: openssl rand -base64 32)
AUTH_SECRET="your-secret-key"

# Google Gemini API Key
GOOGLE_GEMINI_API_KEY="your-gemini-api-key"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shortlink.git
cd shortlink
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up the database:
```bash
# Push the database schema
npm run db:push
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The project uses DrizzleORM with PostgreSQL. Key tables include:
- `users`: User accounts and authentication
- `urls`: Shortened URLs and metadata
- `clicks`: URL click tracking and analytics

## API Routes

- `POST /api/urls`: Create a new shortened URL
- `GET /api/urls`: List URLs (authenticated)
- `GET /r/:shortCode`: URL redirection endpoint
- `GET /api/analytics`: URL analytics (authenticated)

## Authentication

The project uses NextAuth.js for authentication with the following providers:
- Email/Password (credentials)
- GitHub OAuth
- Google OAuth

To set up OAuth:

1. **GitHub**:
   - Go to GitHub Developer Settings
   - Create a new OAuth App
   - Set homepage URL and callback URL
   - Add credentials to `.env`

2. **Google**:
   - Go to Google Cloud Console
   - Create a new project
   - Configure OAuth consent screen
   - Create OAuth credentials
   - Add credentials to `.env`

## Deployment

The project is ready to be deployed on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Set up environment variables
4. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
