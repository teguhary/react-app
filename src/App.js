import React, {  useState } from "react";

function App() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [name, setName] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault()
    setName(`${firstname} ${lastname}`)
    setFirstname('')
    setLastname('')
  } 
  
  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <div class="card-header">
                Form
              </div>
              <div class="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="firstName" className="form-label">Firstname</label>
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} name="firstname" id="firstname" className="form-control"></input>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}  name="lastname" id="lastname" className="form-control"></input>
                  </div>
                  <div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-footer">
                Name : { name ? name : ' ' }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
