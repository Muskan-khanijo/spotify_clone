# Spotify Clone Web App

A **Spotify-like music streaming web application** built with **HTML, CSS, JavaScript, Python (Flask), and MySQL**. Users can **signup, login, play songs, search songs**, and **add their favorite songs** to their library.

---

## 🔹 Features

- **User Authentication**
  - Signup and Login system
  - Secure sessions for logged-in users

- **Music Player**
  - Play songs directly in the browser
  - Display current song title, artist, and cover image

- **Search Songs**
  - Search by song title or artist
  - Dynamic filtering of songs

- **Favorites / Library**
  - Mark songs as favorite using heart button ❤️
  - View favorite songs in your library

- **Responsive Design**
  - Modern UI inspired by Spotify
  - Works on desktop and mobile

---

## 🔹 Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python, Flask
- **Database:** MySQL
- **Others:** Jinja2 templates, Flask sessions

---

## 🔹 Project Structure

spotify_clone/
│
├─ static/
│ ├─ songs/ # MP3 files
│ ├─ covers/ # Song and app images
│ ├─ style.css # CSS file
│ └─ app.js # JavaScript file
│
├─ templates/
│ ├─ index.html # Home page
│ ├─ library.html # User library
│ ├─ login.html # Login page
│ └─ signup.html # Signup page
│
├─ app.py # Flask server code
└─ README.md # Project documentation

markdown
Copy code

---

## 🔹 Database Design

**Database:** `spotify_c3`

**Tables:**

1. **users**
   - `id` INT AUTO_INCREMENT PRIMARY KEY
   - `username` VARCHAR(50) UNIQUE
   - `password` VARCHAR(100)

2. **songs**
   - `id` INT AUTO_INCREMENT PRIMARY KEY
   - `title` VARCHAR(100)
   - `artist` VARCHAR(100)
   - `filename` VARCHAR(100)  _(song file path)_
   - `image` VARCHAR(255)  _(cover image path)_

3. **favorites**
   - `id` INT AUTO_INCREMENT PRIMARY KEY
   - `user_id` INT  _(FK: users.id)_
   - `song_id` INT  _(FK: songs.id)_

---

## 🔹 Setup Instructions

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd spotify_clone
Install dependencies

bash
Copy code
pip install flask mysql-connector-python
Setup MySQL Database

Create database and tables using the provided SQL script (spotify_c3.sql)

Update app.py MySQL credentials if needed:

python
Copy code
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="spotify_c3"
)
Run the Flask App

bash
Copy code
python app.py
Open in Browser

cpp
Copy code
http://127.0.0.1:5000/
🔹 Usage
Signup: Create a new account

Login: Access the home page with all songs

Play songs: Click the ▶ play button

Favorite songs: Click the ❤️ heart button to add to library

View Library: Click Library in the navbar to see your favorites
