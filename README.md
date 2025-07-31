# 💫 Creatorverse

Creatorverse is a React + Supabase web app that lets users manage a collection of content creators. Users can add, view, edit, and delete creators, as well as visit their external channels or pages.

## 🚀 Features

- View all content creators
- View details for a single creator
- Add a new content creator
- Edit existing creator info
- Delete a content creator
- Visit a creator’s external link
- Styled using basic CSS (customize as needed)

## 🛠️ Tech Stack

- React
- React Router
- Supabase (PostgreSQL backend)
- JSX + CSS

## ⚙️ Setup

1. Clone the repo  
   `git clone https://github.com/RobelK1738/MyCreatorverse.git`

2. Install dependencies  
   `npm install`

3. Set up Supabase and update credentials in `client.js`

4. Start the dev server  
   `npm run dev`

## 🧠 Notes

- Ensure your Supabase table is named `creators` with fields: `id`, `name`, `url`, `description`, `imageURL`.
- Make sure your `App.jsx` is wrapped in `<BrowserRouter>` in `main.jsx`.

## 📜 License

MIT License
