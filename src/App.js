import React, {Component} from "react"
import './App.scss';

class App extends Component {
  //It`s very important to use brackets after return. 
  //You can avoid using brackets if you return only one line of code, but it must be on the same line with return
  // In the most apps our code contains more than one line, thus i recommend you always use brackets after return
render () {
  return (<h1>our current</h1>)
}
}


export default App;
