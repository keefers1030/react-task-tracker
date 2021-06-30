import './App.css';
import './styles.css'

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <header>
          <p><a href="https://www.youtube.com/watch?v=TiheM6wSwes&ab_channel=TEDxTalks">#representationmatters</a></p>
        </header>
      </div>

      <div className="logos">
        <img src="../images/leaders.png" alt="Leaders"/>
        <h1>Leaders like me</h1>
      </div>

      <div className="inputs">
        <div className="option1">
          <h2>My gender is</h2>
          <span className="custom-dropdown">
            <select>
              <option>Female ♀️</option>
              <option>Male ♂</option>
              <option>Transgender ⚨</option>
              <option>Gender non-binary ⚥</option>
            </select>
          </span>
        </div>

      <div className="option2">
        <h2>I identify as</h2>
        <span className="custom-dropdown">
          <select>
            <option>Gay ⚣</option>
            <option>Heterosexual ⚤</option>
            <option>Bisexual ⚥</option>
            <option>None of the above</option>
          </select>
        </span>
      </div>

      <div className="option3">
        <h2>I like</h2>
        <span className="custom-dropdown">
          <select>
            <option>Science</option>
            <option>Technology</option>
            <option>Engineering</option>
            <option>Arts</option>
            <option>Math</option>
            <option>Social justice</option>
          </select>
        </span>
      </div>
  </div>
  <input type="submit" value="Submit">
</input>
    </div>
  );
}

export default App;
