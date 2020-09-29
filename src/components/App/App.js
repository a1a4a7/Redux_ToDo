import React from 'react';
import './App.css';
import Table from '../Add_Item_table/Table';
import { Link } from 'react-router-dom';
import SideTab from '../SideTab/SideTab';


function App() {
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  /*       <AddComponent />
        <RemoveComponent /> */
  return (
    <div className="App">
      <div>I am a serarch bar</div>

      <div className="title">I'am App</div>
      <div className="row">
        <span>a side Column</span>
        <SideTab></SideTab>
        <div><Link to="/">Go To Add Page</Link></div>
      </div>

      <div className="row1">
        <Table></Table>
      </div>

    </div>
  );
}

export default App;
