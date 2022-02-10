import { Component } from "react";

const bgColor = ['purple','blue','green','yellow','orange','red'];
const getRandomBackgroundColor = () => 
  bgColor[Math.floor(Math.random() * ((bgColor.length-1) - 0 + 1) + 0)];

class LikeButton extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      count: 0,
      bgColor: getRandomBackgroundColor()
    };

  }

  handleChange() {
    this.setState(state => {
      return {
        count: state.count + 1,
        bgColor: getRandomBackgroundColor()
      }
    });
  }

  render() {
    const divStyle = {
      backgroundColor: this.state.bgColor
    };

    return (
      <button style={divStyle} onClick={ () => this.handleChange()}>{this.state.count} Likes</button>
    );
  }

  
}

export default LikeButton;