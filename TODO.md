npm i # Authentication Implementation TODO

## Completed Tasks
- [x] Create AuthContext.jsx for managing authentication state
- [x] Create ProtectedRoute.jsx component for route protection
- [x] Update App.jsx to use AuthProvider and ProtectedRoute
- [x] Update LoginPage.jsx to handle login submission
- [x] Update Dashboard.jsx to handle logout functionality

## Completed Testing
- [x] Test login flow: Login should redirect to dashboard
- [x] Test protection: Accessing /dashboard without login should redirect to /login
- [x] Test logout: Logout should redirect to login
- [x] Test persistence: Refreshing page should maintain login state
