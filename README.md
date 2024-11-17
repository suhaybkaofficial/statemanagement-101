

## Features

### Client-Side State Management:
* Counter Examples - Simple counter implementation with three approaches:
  - Redux Toolkit
  - React Context API
  - Zustand
* Posts Management - Real-world API data fetching examples:
  - Loading states
  - Error handling
  - Optimized rendering

### Server-Side Rendering:
* Server Components - Efficient server-side rendered posts
* Streaming - Suspense and loading states
* Error Boundaries - Graceful error handling

## Tech Stack
* Framework: Next.js 14 (App Router)
* Language: TypeScript
* State Management:
  - Redux Toolkit
  - React Context API
  - Zustand
* Styling:
  - Tailwind CSS
  - Shadcn/UI
* Components:
  - Server Components
  - Client Components
  - Error Boundaries

## 📦 Project Structure


├── app/

│   ├── api/

│   │   └── posts/          # API routes for server-side

│   ├── posts/             # Server-side posts page

│   └── page.tsx           # Client-side demo page

├── components/

│   ├── layout/            # Layout components

│   │   └── site-header.tsx

│   ├── counter-management-demo.tsx

│   ├── posts-management-demo.tsx

│   ├── posts-server.tsx

│   └── ui/               # Reusable UI components

├── lib/

│   ├── store/            # State management implementations

│   │   ├── redux/        # Redux implementation

│   │   ├── zustand/      # Zustand implementation

│   │   └── context/      # Context API implementation

│   └── types/            # TypeScript types

## 🔍 Component Overview

### State Management Components:

1. Counter Management
   * Redux Counter
     - Uses Redux Toolkit
     - Centralized state management
     - Action creators and reducers
     - TypeScript integration

   * Context API Counter
     - React's built-in context
     - Component-level state sharing
     - Custom hooks implementation
     - Provider pattern

   * Zustand Counter
     - Minimal setup
     - Hook-based API
     - Automatic TypeScript inference
     - Simple state updates

2. Posts Management
   * Redux Posts
     - AsyncThunk for API calls
     - Loading/error states
     - Structured reducers
     - TypeScript support

   * Context Posts
     - Custom fetch logic
     - State management hooks
     - Error boundary integration
     - Loading indicators

   * Zustand Posts
     - Async actions
     - Simple error handling
     - Minimal boilerplate
     - TypeScript interfaces

## UI Components

### 1. Card3D Component
* Hover effects with glowing borders
* Customizable colors
* Responsive design
* Backdrop blur effects

### 2. Implementation Cards
* Syntax-highlighted code
* Scrollable code blocks
* Matching theme colors
* Clear typography

## 💡 Implementation Details

### State Management Approaches

1. **Redux Toolkit**
   - Centralized state management
   - DevTools integration
   - Predictable state updates
   - Best for: Large applications with complex state
   - Features: Actions, reducers, thunks
   - Built-in TypeScript support

2. **Context API**
   - Built into React
   - No external dependencies
   - Component-level state sharing
   - Best for: Small to medium applications
   - Features: Context providers, consumers, hooks
   - Simple state updates

3. **Zustand**
   - Minimal boilerplate
   - Simple API
   - Great performance
   - Best for: Quick implementations and prototypes
   - Features: Custom hooks, automatic updates
   - TypeScript support out of the box

### Server-Side Features

1. **Next.js App Router**
   - Server components
   - API routes
   - Streaming and Suspense
   - Optimized data fetching
   - Automatic caching
   - Route handlers

2. **Error Handling**
   - Error boundaries
   - Fallback components
   - Loading states
   - Graceful degradation
   - Type-safe error handling

3. **Performance**
   - Automatic caching
   - Optimized rendering
   - Code splitting
   - Progressive enhancement
   - Image optimization
   - Edge runtime support

## 🚀 Getting Started

1. Clone the repository:
git clone https://github.com/suhaybkaofficial/statemanagement-101.git

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

