@app.route('/')
def index():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM songs")
    songs = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('index.html', songs=songs)
