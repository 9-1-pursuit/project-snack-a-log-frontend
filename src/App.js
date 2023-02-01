import { useContextProvider } from "./Provider/Provider";
import RouteComponent from "./Components/RouteComponent";

function App() {
  const { theme } = useContextProvider();
  return (
    <div className={`App ${theme}`}>
      <RouteComponent />
    </div>
  );
}

export default App;
