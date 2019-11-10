import React from 'react'


import Main from './Main'
import Sidebar from './Sidebar'




class Home extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      data: []


    }

    this.onStatsChange = this.onStatsChange.bind(this)
  }

  onStatsChange(data){

    this.setState({ data: data
    } )

  }


  componentDidMount() {



  }

  componentDidUpdate(){

  }



  render() {
    return(
      <section className="section">
        <div className='title pulsate'>pastelDOA</div>
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <Sidebar data={this.state.data}/>
            </div>
            <div className="column">
              <Main onChange={this.onStatsChange} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Home
