import React from 'react';
var Resizable = require('react-resizable').Resizable;
var ResizableBox = require('react-resizable').ResizableBox;
// import ResizableBox from '../../libs/js/ResizableBox.jsx';

export default class TestLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 200,
      height: 200
    }
    this.onClick = this.onClick.bind(this);
  };

  onClick(){
    // this.setState({width: 200, height: 200});
  }

  onResize(event, {element, size}){
    // var width=size.width;
    // var height= size.height;
    // this.setState({width: width, height: height});

  };

  render() {
    return (
      <div>
       {this.state.width}
        <button onClick={this.onClick} style={{'marginBottom': '10px'}}>Reset first element's width/height</button>
        <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
          <div className="box" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
            <span className="text">{"Raw use of <Resizable> element. 200x200, no constraints."}</span>
          </div>
        </Resizable>
        <ResizableBox className="box" width={this.state.width} height={200} >
          <span className="text"> {"<ResizableBox>, same as above."} </span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={200} draggableOpts={{grid: [25, 25]}}>
          <span className="text">Resizable box that snaps to even intervals of 25px.</span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
          <span className="text">Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.</span>
        </ResizableBox>
        <ResizableBox className="box box3" width={200} height={200} minConstraints={[150, 150]} maxConstraints={[500, 300]}>
          <span className="text">Resizable box with a handle that only appears on hover.</span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={200} lockAspectRatio={true}>
          <span className="text">Resizable square with a locked aspect ratio.</span>
        </ResizableBox>
        <ResizableBox className="box" width={200} height={120} lockAspectRatio={true}>
          <span className="text">Resizable rectangle with a locked aspect ratio.</span>
        </ResizableBox>

      </div>
    );
  }
}
