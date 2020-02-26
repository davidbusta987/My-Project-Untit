import React , {Component} from  'react'



class HomePage extends Component {
    render () {

        return (
            <div className="home-page">
                <main>
                   <section className="upper-section"> 
                      <div className="rigth-columm">
                          <h1 className="title">
                                Improve student outcomes and insights. 
                          </h1>
                          <p className="description">
                            Analize studennt brain capacities and gives the tools to thake students to the next level. 
                          </p>
                          <div className="links">
                              <a className="demo">
                                    SEE THE DEMO
                              </a>
                              <br/>
                              <a className="create-account">
                                    CREATE ACCOUNT
                              </a>
                          </div>
                      </div>
                   </section> 
                </main>
            </div>
        )
    }
}

export default HomePage