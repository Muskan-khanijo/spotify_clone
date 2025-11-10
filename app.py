from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="muskan@106",  # change if needed
    database="myclone2"
)

cursor = db.cursor(dictionary=True)

@app.route('/')
def index():
    cursor.execute("SELECT * FROM song")
    songs = cursor.fetchall()
    return render_template('index.html', songs=songs)

if __name__ == '__main__':
    app.run(debug=True)

