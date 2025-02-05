# React Router Dom v6 Nested Route Rendering Issue

This repository demonstrates a common issue encountered when using nested routes in React Router Dom v6.  The problem arises when a parent route's path is also a child route, causing rendering conflicts.

## Problem

The provided `App.js` contains nested routes where `/about` is a parent route and `/about/contact` is a child route.  When navigating to `/about/contact`, the nested route fails to render correctly.

## Solution

The `AppSolution.js` provides a solution using `useLocation` or `Navigate` to resolve the rendering issue, allowing nested routes to function as expected.

## How to reproduce

1. Clone the repository.
2. Navigate to the directory using your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the routing behavior and the solution provided. 