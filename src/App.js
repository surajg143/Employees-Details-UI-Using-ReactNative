import './App.css';
import AddEmployeeData from './component/AddEmployeeData';
import FetchDataFromApi from './component/FetchDataFromApi';

function App() {

  return (
    <div className="App">
      <AddEmployeeData/>
      {/* <UpdateData/> */}
      <FetchDataFromApi/>
    </div>
    
  );
}

export default App;
