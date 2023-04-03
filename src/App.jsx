import React , {useState} from 'react';
import TaskAdd from './TaskAdd';
import Navbar from './Navbar';
function App() {
  return (
    <>
    <div className=" flex justify-center border border-md shadow shadow-md">
    <Navbar />
      </div>
      <div className="p-6 flex justify-center">
    < TaskAdd/>
        </div>
  </>
  );
}

export default App;