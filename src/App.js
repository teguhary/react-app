import React from "react";
import Card from "./components/Card";


function App() {
  return(
    <div className="container py-4">
      <h3>All Posts</h3>
      <hr></hr>
      <div className="row">
        <div className="col-md-4">
          <Card content={{
            imageUrl: "http://placekitten.com/g/300/200",
            title: "First Post",
            author: "Teguh",
            published: "15 Okt 2021"
          }}
          />
        </div>
        <div className="col-md-4">
          <Card content={{
            imageUrl: "http://placekitten.com/300/200",
            title: "Second Post",
            author: "Ary",
            published: "20 Okt 2021"
          }}
          />
        </div> 
        <div className="col-md-4">
          <Card content={{
            imageUrl: "http://placekitten.com/g/300/200",
            title: "Third Post",
            author: "Erdiansyah",
            published: "25 Okt 2021"
          }}
          />
        </div> 
      </div>
    </div>
  )
}

export default App;
