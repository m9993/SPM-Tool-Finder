import React from 'react';
import { features } from './data/features'
import { t } from './data/tools';

function App() {
  const [checkList, setCheckList] = React.useState([])
  const [tools, setTools] = React.useState([])
  const [submit, setSubmit] = React.useState(false)

  const find = () => {
    setTools([])
    checkList.map((item, index) => {
      for (let i = checkList.length - 1; i >= 0; i--) {
        // console.log(checkList[i].tools)    
        const filteredArray = checkList[i].tools.filter(value => item.tools.includes(value));
        setTools(filteredArray)
      }
    })
  }
  React.useEffect(() => {
    find()
  }, [submit])


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand px-3" href="#">SPM Tool Selection</a>
      </nav>

      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className='col-md-5 mb-5'>
            <h3>Select Fetures</h3>
            {features.map((feature, index) => (
              <div className='my-2 ms-3' key={index}>
                <div className="form-check">
                  <input
                    onChange={() => {
                      let item = checkList

                      const count = item.find(a => (a.id == feature.id))
                      if (count) {
                        const filteredItem = item.filter(a => (a.id != feature.id))
                        setCheckList(filteredItem)
                      }
                      if (!count) {
                        item.push(feature)
                        setCheckList(item)
                      }

                      setSubmit(!submit)
                    }}
                    className="form-check-input" type="checkbox" value="" id={"flexCheckChecked" + index}
                  />
                  <label className="form-check-label" htmlFor={"flexCheckChecked" + index}>
                    {feature.title} {feature.id}
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className='col-md-4 mb-5'>
            <div>
              <h3>Tools From Selected Features</h3>
              <div className="accordion accordion-flush" id="accordionFlushExample">
              {checkList.length!=0?
                
              checkList.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapseThree"+index} aria-expanded="false" aria-controls={"flush-collapseThree"+index}>
                        {item.title}
                        <span className="badge rounded-pill bg-secondary ms-2">{item.tools.length}</span>
                      </button>
                    </h2>
                    <div id={"flush-collapseThree"+index} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <ul className="list-group list-group-flush">
                          {item.tools.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
              ))
              :
              <div>No Data Available</div>
              }
              </div>
            </div>
          </div>

          <div className='col-md-3 mb-5'>
            <h3>Available Tools<span className="badge rounded-pill bg-secondary ms-2">{tools.length}</span></h3>
            {checkList.length > 0 ?
              tools.length > 0 ?
                tools.map((item, index) => (
                  <button key={index} type="button" className="btn btn-sm btn-success m-2">{item}</button>
                ))
                :
                <div>No Available Tool</div>
              :
              <div>Please Select Feature</div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
