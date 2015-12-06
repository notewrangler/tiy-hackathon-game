var React = require('react');
var Backbone = require('backbone');
var ToonList = require('../../collections/toonList');
var PubSub = require('../lib/pubsub.common');


module.exports = React.createClass({
	getInitialState: function(){
		return {
			buttonArray: [],
			answer: ""
		}
	},
	componentWillMount: function () {
		var arr = this.props.question.choices;
		this.setState({buttonArray: shuffle(arr)});
	},
	componentWillReceiveProps: function(newProps){
		var arr = newProps.question.choices;
		this.setState({buttonArray: shuffle(arr)});
	},
	_handleClick: function(e) {
		e.preventDefault();
		var props = this.props;
		if (e.target.innerHTML === this.props.question.correct){
			this.setState({answer: "That's Right!"})
		} else {
			this.setState({answer: "Sorry, that's not correct."})
		}
		props.update();
	},
	render: function(){
		return (
			<div>
				<div id="pic-frame">
					{this.props.question.type === "image" ?
						<img src={this.props.question.url} /> :
						<iFrame src={this.props.question.url}></iFrame>
					}
				</div>
				<p id="answer">{this.state.answer}</p>
				<div id="button-row1">
					<button type="button" className="side-side" onClick={this._handleClick}>{this.state.buttonArray[0]}</button>
					<button type="button" className="side-side" onClick={this._handleClick}>{this.state.buttonArray[1]}</button>
				</div>
				<div id="button-row2">
					<button type="button" className="side-side" onClick={this._handleClick}>{this.state.buttonArray[2]}</button>
					<button type="button" className="side-side" onClick={this._handleClick}>{this.state.buttonArray[3]}</button>
				</div>
			</div>
		)
	}
})


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;

	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
	return array;
}
