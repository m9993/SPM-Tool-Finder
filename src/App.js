import React from 'react';
import { features } from './data/features'
import { t } from './data/tools';

function App() {
  const [checkList, setCheckList] = React.useState([])
  const [tools, setTools] = React.useState([])
  const [submit, setSubmit] = React.useState(false)

  const find = () => {
    setTools([])
    let featureWiseTools = []
    checkList.map((item, index) => {
      featureWiseTools.push(item.tools)
    })

    // const data = [[1, 2, 4], [1, 3,4], [1,2, 3,4], [2, 3, 4]]
    const data = featureWiseTools
    let tools = [];

    let prev = []
    data.map((i) => { i.map((j) => { prev.push(j) }) })

    data.map((i, index) => {
      tools = prev.filter(value => i.includes(value));
      prev = tools
    })

    setTools([...new Set(tools)])

    if (featureWiseTools.length == 1) {
      setTools(featureWiseTools[0])
    }

  }

  React.useEffect(() => {
    find()
  }, [submit])

  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img src="logo192.png" alt="" width="30" height="30" className="d-inline-block align-text-top me-3"/>
            SPM Tool Selection
            </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className='col-md-5 mb-5'>
            <h4>Select Fetures</h4>
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
                      else {
                        item.push(feature)
                        setCheckList(item)
                      }

                      setSubmit(!submit)
                    }}
                    className="form-check-input" type="checkbox" value="" id={"flexCheckChecked" + index}
                  />
                  <label className="form-check-label" htmlFor={"flexCheckChecked" + index}>
                    {feature.title}
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className='col-md-4 mb-5'>
            <div>
              <h4>Chosen Feature Tools</h4>
              <div className="accordion accordion-flush w-75" id="accordionFlushExample">
                {checkList.length != 0 ?

                  checkList.map((item, index) => (
                    <div key={index} className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapseThree" + index} aria-expanded="false" aria-controls={"flush-collapseThree" + index}>
                          {item.title}
                          <span className="badge rounded-pill bg-secondary ms-2">{item.tools.length}</span>
                        </button>
                      </h2>
                      <div id={"flush-collapseThree" + index} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="mt-3 mx-2">
                          <ul>
                            {item.tools.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <div className='text-muted'>No Data Available</div>
                }
              </div>
            </div>
          </div>

          <div className='col-md-3 mb-5'>
            <h4>Available Tools {tools.length!=0 && <span className="badge rounded-pill bg-secondary ms-2">{tools.length}</span>}</h4>
            {checkList.length > 0 ?
              tools.length > 0 ?
                tools.map((item, index) => (
                  <button key={index} type="button" className="btn btn-sm btn-success m-2">{item}</button>
                ))
                :
                <div className='text-muted'>No Available Tool</div>
              :
              <div className='text-muted'>Please Select Feature</div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
