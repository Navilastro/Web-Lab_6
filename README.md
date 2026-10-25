# React Post Dashboard

This is my Lab 6 assignment for the Web Programming course. The project is a simple Post Dashboard that gets data from an API and shows it to the user. I used React functional components, `useState`, `useEffect`, and `useReducer` for this assignment.

## File Organization

My project follows a strict structure to keep things clean and separated:

*   **`src/api/postsApi.js`**: I put the fetch logic here. It only talks to the API and returns the data. It has no UI code.
*   **`src/components/`**: This folder has my UI parts.
    *   `Post.jsx`: Shows just one single post (title and body).
    *   `PostList.jsx`: Takes the array of posts and maps them to `Post` components.
    *   `FilterForm.jsx`: The input box to filter posts by their title.
*   **`src/reducer/postsReducer.js`**: This file manages the complex state (loading, error, success) for fetching posts.
*   **`src/App.jsx`**: The main brain of the app. It brings all components together, runs the `useEffect` to fetch data, and handles the filtering logic during render.
*   **`src/main.jsx`**: The entry point that renders the React app.

## Challenges I Faced

I had a few challenges while working on this project:

1.  **Understanding useReducer**: At first, it was hard to understand how `dispatch` and `action.type` work together. I was used to `useState`, but using `useReducer` helped me manage loading and errors much better in the end.
2.  **Derived State for Filtering**: The assignment rules said I shouldn't store the filtered posts in a state. I had to learn how to filter the posts directly before returning the JSX, just by looking at the `filterText` state and the original posts.
3.  **Cleanup Function**: I had to make sure the component didn't try to update the state if it was unmounted. I used a boolean variable `isMounted` inside the `useEffect` cleanup to solve this memory leak risk.