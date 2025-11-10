# Spotify Clone – Full Stack Music Streaming Application

A **full-stack music streaming application** built using **HTML, CSS, JavaScript, Python, and SQL**, designed to replicate the core functionality and user interface of Spotify. Users can browse songs, play/pause tracks, navigate playlists, and interact with a dynamic music library stored in a SQL database.

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [System Architecture](#system-architecture)  
5. [Installation & Setup](#installation--setup)  
6. [Project Structure](#project-structure)  
7. [Database Design](#database-design)  
8. [Usage](#usage)  
9. [Future Improvements](#future-improvements)  
10. [Author](#author)  
11. [License](#license)  

---

## Overview

The **Spotify Clone** is a web-based music player application designed to demonstrate full-stack development skills. It combines:

- **Front-End:** HTML, CSS, and JavaScript for responsive and interactive UI.  
- **Back-End:** Python (Flask/Django or custom server) for handling data and serving the application.  
- **Database:** SQL (MySQL/SQLite) for storing songs, playlists, and user preferences.  

This application simulates a real-world music streaming platform, allowing users to interact with songs, playlists, and audio playback dynamically.

---

## Features

- **Play, Pause, Next, Previous:** Control music playback seamlessly.  
- **Dynamic Playlist:** Songs are fetched from a SQL database and displayed in the playlist.  
- **Responsive Design:** Works across desktop and mobile browsers.  
- **Song Highlighting:** The currently playing song is visually highlighted.  
- **Full-Stack Integration:** Front-end communicates with Python backend to fetch and manage song data.  
- **Local Audio Playback:** Supports MP3 audio files stored on the server.

---

## Technologies Used

| Component       | Technology / Library                                
|-----------------|----------------------------------------------------
| Frontend        | HTML, CSS, JavaScript                              
| Backend         | Python (Flask/Django or plain Python server)      
| Database        | SQL (MySQL or SQLite)                               
| Database Connector | mysql-connector-python / sqlite3                  
| Media Files     | Local audio (MP3)                                   
| Icons & UI      | Font Awesome, CSS animations                        
| IDE / Tools     | VS Code, Sublime Text, Chrome Browser              

---

## System Architecture

1. **Front-End (HTML/CSS/JS)**  
   - Displays the music player UI: navigation, playlist, and controls.  
   - Handles audio playback and updates the UI dynamically using JavaScript.  

2. **Back-End (Python Server)**  
   - Connects to SQL database to fetch songs, playlists, and metadata.  
   - Serves HTML pages and static files (audio, CSS, JS).  
   - Handles future extensions like user login, playlist creation, and analytics.  

3. **Database (SQL)**  
   - Stores songs, playlists, and track metadata.  
   - Supports dynamic fetching and updating of playlists.

**Flow Diagram:**  

