import "./App.css"; //importing css style
import Header from "./components/Header/Header"; //importing Header Component
import Main from "./components/Main/Main"; //importing Main Component

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
