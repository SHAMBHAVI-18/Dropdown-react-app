import Dropdown from "./Dropdown";

function App() {

  const options = ['Yes', 'Probably Not', 'Maybe'];


  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}

export default App;
