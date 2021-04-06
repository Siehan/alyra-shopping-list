import Header from "./components/Header";
import ShoppingApp from "./components/ShoppingApp";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="row">
        <ShoppingApp />
      </main>
    </div>
  );
}

export default App;
