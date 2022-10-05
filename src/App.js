// import logo from "./logo.svg";
import "./App.css";

function Person(props) {
  return (
    <>
      <h2>Hello {props.name}</h2>
    </>
  );
}

function App() {
  const isUserLoggedIn = true;

  return (
    <div className="App">
      <header className="App-header">
        {isUserLoggedIn ? (
          <>
            <h1>You are logged in!</h1>
            <Person name="John" />
            <Person />
          </>
        ) : (
          <>
            <h1>not logged in</h1>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
