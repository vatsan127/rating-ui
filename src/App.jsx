import Header from "./components/Header";
import Description from "./components/Description";
import Star from "./components/Star";

function App() {
  return (
    <>
      <div className="container">
        <div className="container-items">
          <Header />
          <Description />
          <Star />
        </div>
      </div>
    </>
  );
}

export default App;
