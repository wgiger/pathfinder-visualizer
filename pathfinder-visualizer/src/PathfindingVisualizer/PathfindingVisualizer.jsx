import React, {Component} from 'react';
import './PathfindingVisualizer.css';
import Node from './Node/Node'


export default class PathfindingVisualizer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      nodes: []
    };
  }

  componentDidMount() {
    const nodes = [];
    for (let row=0; row < 15; row++) {
      const currentRow = [];
      for (let col=0; col < 50; col++) {
        const currentNode = {
          row,
          col,
          isStart: row === 10 && col === 10,
          isFinish: row === 10 && col ===40
        }
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({nodes});
  }

  render() {
    const {nodes} = this.state;
    return (
      <div className="grid">
         {
           nodes.map((row, rowIdx) => {
             return (
               <div key={rowIdx}>
              {
                row.map((node, nodeIdx) =>{
                  const {isStart, isFinish} = node;
                  return ( <Node
                    key={nodeIdx}
                    isStart={isStart}
                    isFinish={isFinish}
                  ></Node>)
                })
                }
              </div>
             )
           })
         }
      </div>
    )
  }
};
