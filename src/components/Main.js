
import React from 'react'
export const resourcesArr = []

import 'bulma'



class Main extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      height: 425,
      width: 640,
      playing: true,
      player: {
        height: 20,
        width: 10,
        x: 50,
        y: 100,
        velX: 0,
        velY: 0,
        speed: 8,
        colour: 'black'
      },
      friction: 0.2,
      gravity: 0.2,
      background: 'blue',
      shapes: [1,2,3]
    }


    this.checkKey = this.checkKey.bind(this)
    this.update = this.update.bind(this)
    this.random = this.random.bind(this)


  }

  draw(){

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 0.2
    ctx.fillStyle = this.state.background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for(let i=0; i< this.state.shapes.length;i++){
      ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16)
      ctx.beginPath()
    ctx.rect(this.state.player.x+(i*10), this.state.player.y+(Math.floor(Math.random() * 5+ 5)*10), this.state.player.width+(Math.floor(Math.random() * 5+ 5)*i),this.state.player.height+(Math.floor(Math.random() * 5+ 5)*i))
    ctx.fill()
    ctx.stroke()
  }
    //console.log(ctx.getImageData(10, 10, 1, 1))
  }

  update(){
    const player  = this.state.player

    this.setState({ player: {...player,
      x: player.x +player.velX,
      y: player.y+player.velY
    } })


    if(player.y >= this.state.height){
      (console.log('top'))

      this.setState({ player: {...player,
        y: -10
      } })
      this.random()
    } else
    if(player.y < -10){

      this.setState({ player: {...player,

        y: this.state.height-(player.height/10)
      }, shapes: [...this.state.shapes,1,2,3] }
      )
      this.random()

    }


    if(player.x >= this.state.width){
      this.setState({ player: {...player,
        x: -player.width
      } })
      this.random()
    } else
    if(player.x < -player.width){
      this.setState({ player: {...player,
        x: this.state.width-(player.width/10)
      }, shapes: [...this.state.shapes,1,2,3] })
      this.random()
    }






    this.draw()
  }


  random(){
    this.setState({ player: {...this.state.player, colour: '#'+Math.floor(Math.random()*16777215).toString(16),height: (Math.floor(Math.random() * 5+ 5)*10), width: (Math.floor(Math.random() * 5+ 5)*10) }, background: '#'+Math.floor(Math.random()*16777215).toString(16) })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.checkKey)
    this.interval2 = setInterval(() => {

      this.update()
    }, 100)



  }

  checkKey(e) {
    e = e || window.event
    e.preventDefault()


    if (e.keyCode === 38 || e.keyCode === 32) {
      // up arrow

      this.setState({ player: {...this.state.player, velY: -this.state.player.speed*2 } })

      this.draw()
    }else if (e.keyCode === 40) {
      // down arrow
      this.setState({ player: {...this.state.player, velY: +this.state.player.speed*2 } })
      this.draw()

    } else if (e.keyCode === 37) {
      // left arrow

      if (this.state.player.velX > -this.state.player.speed) {
        this.setState({ player: {...this.state.player, velX: -this.state.player.speed*2 } })
      }


      this.draw()

    }else if (e.keyCode === 39) {
      // right arrow

      if (this.state.player.velX < this.state.player.speed) {
        this.setState({ player: {...this.state.player, velX: +this.state.player.speed*2 } })
      }
      this.draw()

    }else if (e.keyCode === 82) {
      //R

      this.setState({ player: {...this.state.player, colour: '#'+Math.floor(Math.random()*16777215).toString(16),height: (Math.floor(Math.random() * 5+ 5)*10), width: (Math.floor(Math.random() * 5+ 5)*10) }, background:   '#'+Math.floor(Math.random()*16777215).toString(16) })

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
