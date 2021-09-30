import React from "react";

function App() {
  return(
    <div className="container py-4">
      <h3>All Posts</h3>
      <hr></hr>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
          <img className="card-img-top" src="http://placekitten.com/300/200" placeholder="kitten image"></img>
            <div className="card-body">
              <h4>First Post</h4>
              <small className="text-muted">Author, Published 7 Okt 2021</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
