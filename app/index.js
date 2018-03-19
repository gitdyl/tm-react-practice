var React = require('react');
var ReactDOM = require('react-dom');

require('./style.css');

//style
//lifecycle event

class App extends React.Component {
	render() {
		return (
		  <div>
			Hello World!
		  </div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.GetElementById('app')
)