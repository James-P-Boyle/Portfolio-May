/* import logo from "./logo.svg"; */
import MainContent from "./components/MainContent";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <>
      <div class="flex md:flex-row-reverse flex-wrap">
        {/* <!--Main Content--> */}
        <MainContent />
        {/* <!--Sidebar--> */}
        <NavComponent />
      </div>
    </>
  );
}

export default App;
