
import React from 'react'
export const resourcesArr = []

import 'bulma'



class Main extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      playing: true,
      player: {
        x: 50,
        y: 100,
        radius: 20,

      }
    }


    this.checkKey = this.checkKey.bind(this)
    this.update = this.update.bind(this)


  }

  draw(){

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'green'
    ctx.fillRect(0, (canvas.height/100)*80, canvas.width, (canvas.height/100)*20)
    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.arc(this.state.player.x, this.state.player.y,     this.state.player.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
    //console.log(ctx.getImageData(10, 10, 1, 1))
  }

  update(){
    this.draw()
  }


  componentDidMount() {

    document.addEventListener('keydown', this.checkKey)
    this.interval = setInterval(() => {

      this.update()
    }, 100)


  }

  checkKey(e) {
    e = e || window.event
    e.preventDefault()

    console.log(this.state.player)
    if (e.keyCode === 38 || e.keyCode === 32) {
      // up arrow
      this.setState({ player: {...this.state.player, y: this.state.player.y-10} })
      this.draw()
    }else if (e.keyCode === 40) {
      // down arrow
      this.setState({ player: {...this.state.player, y: this.state.player.y+10} })
      this.draw()

    } else if (e.keyCode === 37) {
      // left arrow
      this.setState({ player: {...this.state.player, x: this.state.player.x-10} })
      this.draw()

    }else if (e.keyCode === 39) {
      // right arrow
      this.setState({ player: {...this.state.player, x: this.state.player.x+10} })
      this.draw()

    }else if (e.keyCode === 82) {
      //R

    }
  }



  render(){
    return(

      <div className="container" onKeyDown={this.checkKey}>
        <canvas id="canvas" width={640} height={425} onKeyDown={this.checkKey} />
      </div>
    )
  }
}



export default Main
