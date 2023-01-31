import Provider from "./Provider/Provider";
import RouteComponent from "./Components/RouteComponent";

function App() {
  return (
    <div className="App">
      <Provider>
        <RouteComponent />
      </Provider>
    </div>
  );
}

export default App;
