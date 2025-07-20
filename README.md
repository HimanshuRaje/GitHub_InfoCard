# 📦 GitHub Info Card

A sleek, responsive React component that dynamically fetches and displays a GitHub user's public profile using the GitHub REST API.

## 🚀 Features

- Fetches real-time data directly from GitHub API
- Displays:
  - Profile picture
  - Username and name
  - Bio
  - Followers, Following, and Public Repositories
- Handles invalid usernames and API errors gracefully
- Clean and responsive UI design with modern CSS
- Lightweight and easily embeddable in other React apps

## 📸 Screenshot

![GitHub Info Card Demo](./public/cardView.png)
![GitHub Info Card Demo](./public/fullView.png)

## 🛠️ Technologies Used

- React (Hooks: `useState`, `useEffect`)
- GitHub REST API
- JavaScript (ES6+)
- CSS-in-JS styling

## 🌟 Why This Project Is Special

This project demonstrates an **intelligent use case of RESTful API integration**. It shows how to:

- Communicate with external APIs from React
- Handle asynchronous data fetching with `async/await`
- Manage component state dynamically
- Design user-friendly interfaces using real data
- Gracefully handle edge cases like errors and loading states

It’s a **real-world example** of how modern web apps retrieve, process, and render external data — a core skill in today’s frontend development.

## 🔧 How to Use

1. Clone this repo:
   ```bash
   git clone https://github.com/yourusername/github-info-card.git
   cd github-info-card

    npm install

    npm run dev

    <GitHubInfoCard username="you can write your username also" />
    ```


