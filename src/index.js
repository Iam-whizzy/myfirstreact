import React from 'react';
import ReactDOM from 'react-dom';

 class Car extends React.Component {
   constructor(){
   super();
   this.state = {color: 'black'};
 }
 render() { 
   return <h1>Hello World!</h1>;
  }
}
ReactDOM.render(<Car/>, document.getElementById('root'));