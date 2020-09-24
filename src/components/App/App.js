import React from 'react';
import './App.css';
// import AddComponent from './components/AddComponent/AddComponent';
// import RemoveComponent from './components/RemoveComponent/RemoveComponent';
// import ModalExampleShorthand from './components/Modals/AddModal/AddModal';



function App() {
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  /*       <AddComponent />
        <RemoveComponent /> */
  return (
    <div className="App">
      <span className="title">I'am App</span>


    </div>
  );
}

export default App;
