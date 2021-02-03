const HelloButton = () => {
  // this is a component, whih is why there is a captial letter
  const message = 'Hello React';

  return React.createElement('button', null, message)
}

const domContainer  = document.querySelector("#main");
// the root where we render

ReactDOM.render(React.createElement(HelloButton), domContainer)