import React from 'react'



class Sidebar extends React.Component {


  constructor(props) {
    super(props)

    this.state = {

    }



  }





  componentDidMount() {

    console.log(this.props)


  }





  render() {



    return(
      <div>
        <div className='sidebar'>
          <h1>STATS</h1>
          <hr/>
          {this.props.data.highscore &&<div>
            <div className='stat'>Highscore: {this.props.data.highscore}</div>
            <div className='stat'>Games Played: {this.props.data.gamesPlayed}</div>
            <div className='stat'>Average: {(this.props.data.scores.reduce((a,b)  => a+b,0)/this.props.data.gamesPlayed).toFixed(2)}</div>



          </div>}


        </div>
      </div>
    )
  }
}

export default Sidebar
