const tracksEl = document.getElementById("tracks");
const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("now-playing");
const search = document.getElementById("search");

let currentTrackId = null;

function fetchTracks(q = "") {
  const url = "/api/tracks" + (q ? "?q=" + encodeURIComponent(q) : "");
  fetch(url)
    .then((r) => r.json())
    .then(renderTracks)
    .catch((err) => {
      console.error(err);
      tracksEl.innerHTML = "<li class='track'>Failed to load tracks</li>";
    });
}

function renderTracks(list) {
  if (!Array.isArray(list) || list.length === 0) {
    tracksEl.innerHTML = "<li class='track'>No tracks found</li>";
    return;
  }
  tracksEl.innerHTML = "";
  list.forEach((t) => {
    const li = document.createElement("li");
    li.className = "track";
    li.dataset.id = t.id;
    li.dataset.url = t.audio_url;
    li.innerHTML = `<div>
      <div style="font-weight:700">${escapeHtml(t.title)}</div>
      <div style="color:var(--muted);font-size:12px">${escapeHtml(t.artist)} · ${escapeHtml(t.album || "")}</div>
    </div>
    <div style="min-width:60px; text-align:right;"><button>Play</button></div>`;
    li.addEventListener("click", () => playTrack(t));
    tracksEl.appendChild(li);
  });
}

function playTrack(t) {
  if (!t || !t.audio_url) return;
  if (currentTrackId === t.id) {
    // toggle pause/play
    if (audio.paused) audio.play(); else audio.pause();
    return;
  }
  currentTrackId = t.id;
  audio.src = t.audio_url;
  audio.play().catch(console.error);
  nowPlaying.textContent = `Now playing: ${t.title} — ${t.artist}`;
}

search.addEventListener("keyup", (e) => {
  const q = e.target.value.trim();
  fetchTracks(q);
});

// simple HTML escape
function escapeHtml(s) {
  if (!s) return "";
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// initial load
fetchTracks();