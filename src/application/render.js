/* global document */
import ReactDOM from 'react-dom'


const render = (component) => {
  const node = document.getElementById('root')
  ReactDOM.render(component, node)
}

export default render
