CREATE DATABASE myclone2;
USE myclone2;

CREATE TABLE song (
	title VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    cover_url VARCHAR(255),
    audio_url VARCHAR(255)
);
INSERT INTO song (title, audio_url , artist, cover_url  ) 
VALUES('Without Me', 'static/songs/Without Me.mp3', 'AP Dhillon', 'static/covers/Ap Dhillon.jpg'),
('Mahiya', 'static/songs/Mahiya.mp3', 'Diljit', 'static/covers/diljit.jpg'),
('Tu', 'static/songs/Tu.mp3', 'Talwinder', 'static/covers/Talwinder.jpg'),
('Take It Easy', 'static/songs/Take It Easy.mp3', 'Karan Aujla', 'static/covers/Karan Aujla.jpg');
select * from song;
