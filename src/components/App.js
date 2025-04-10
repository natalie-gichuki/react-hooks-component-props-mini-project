import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Articlelist";

console.log(blogData);

function App() {
  return (
    <div className="App">
      
      <Header name="My Amazing Blog"/>
      
      <About about="I am a trainee web developer who is currently blogging" 
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
        <Article title="School Website" date="10th October 2025" preview="Let clean code guide you"/>
        <Article title="Spa Business" date="24th August 2025" preview="Test on Javascript"/>
        <Article title="The Argyle hotel" date="17th November 2025" preview="Home away from home"/>
    </div>
  );
}

export default App;
