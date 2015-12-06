var React = require('react');
var Backbone = require('backbone');
var PubSub = require('../lib/pubsub.common');
var toonData = require('../../json/toon_data.json');
var ToonList = require('../../collections/toonList');
var ToonItem = require('../../models/toonItem');
var Question = require('./question.jsx');


module.exports = React.createClass({
	getInitialState: function(){
		return {
			list: [],
			updatedList: [],
			quiz: {}
		}
	},
	componentWillMount: function(){
		var Cartoons = new ToonList();
		toonData.forEach(function(toon){
			Cartoons.add(toon);
		});
		list = Cartoons.toJSON();
		this.state.updatedList = list;
		this._updateList();
	},
	_updateList: function() {
		var block = new ToonItem();
		var pick = Math.floor(Math.random() * (this.state.updatedList.length - 1)) + 1;
		block = this.state.updatedList[pick];
		this.setState({quiz: block});

		var trimmedList = this.state.updatedList.filter(function(item){
			if (item.id !== this.state.quiz.id) {
				return true;
			}
		}, this);
		this.setState({updatedList: trimmedList});
	},

	render: function(){
		return (
			<div id='container'>
				<h1> Name that Toon! </h1>
				<div id='question'>
					<Question question={this.state.quiz} update={this._updateList}/>
				</div>
			</div>

		)
	}
})
