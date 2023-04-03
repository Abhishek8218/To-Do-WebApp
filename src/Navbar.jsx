import React from 'react';
import {FcTodoList} from 'react-icons/fc';
function Navbar(){
  return (
    <div className="flex jusitfy-between max-w-screen mx-auto bg-white px-4">
      <h1 className="font-extrabold p-5 text-4xl text-orange-500 italic">ToDo Tasks</h1>
      <FcTodoList className="text-6xl m-3 h-100% text-orange-500 animate-pulse"/>
    </div>
  );
}
export default Navbar;