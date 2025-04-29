// src/App.js
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Lyon Games</h1>
        <p>Casual Pixel Puzzle Games</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.alanilyon.pixeldoku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Play Pixeldoku</button>
        </a>
      </header>
      <section className="features">
        <h2>Why Play?</h2>
        <ul>
          <li>🧩 Relaxing Sudoku Gameplay</li>
          <li>🎨 Cute Pixel Themes: Cats, Dogs, Bugs & More</li>
          <li>📱 Free to Play on Android</li>
        </ul>
      </section>
      <footer>
        <p>© 2025 Lyon Games. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
