import { features } from './data/features'

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand px-3" href="#">SPM Tool Selection</a>
      </nav>

      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className='col-md-4 mb-5'>
            <h3>Select Fetures</h3>
            {features.map((tool, index) => (
              <div className='my-2 ms-3' key={index}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id={"flexCheckChecked" + index} />
                  <label className="form-check-label" htmlFor={"flexCheckChecked" + index}>
                    {tool.title}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-4'>
            <h3>Available Tools</h3>
            <button type="button" class="btn btn-success m-2">Secondary</button>
            <button type="button" class="btn btn-success m-2">Secondary</button>
            <button type="button" class="btn btn-success m-2">Secondary</button>
            <button type="button" class="btn btn-success m-2">Secondary</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
