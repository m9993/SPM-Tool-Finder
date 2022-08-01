import { features } from './data/features'

function App() {
  return (
    <>
      <div className="container">
        <h1 className='text-center my-5'>Identify SPM Tools as per criteria</h1>

        <div className="row justify-content-center">
          <div className='col-md-4'>
            <h3 className='text-warning'>Select Fetures</h3>
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
            <h3 className='text-warning'>Available Tools</h3>
            <h5 className='my-2 ms-3' >Trello</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
