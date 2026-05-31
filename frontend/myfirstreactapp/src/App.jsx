import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <Header/>
      <div id="abcd">MY first react app</div>
      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi
        cupiditate eligendi, ut cumque neque nostrum enim fugit corrupti veniam
        ducimus vitae non voluptatum sint voluptate. Dignissimos dolorem autem
        expedita!
      </p>
      <button id="Footer">cleck me</button>
      <Footer/>
    </>
  );
}
export default App;
