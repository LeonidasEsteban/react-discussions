var React = require('react');

var DiscussionAdd = require('./components/DiscussionAdd');
var DiscussionMain = require('./components/DiscussionMain');
var DiscussionStores = require('./stores/DiscussionStores');



var App = React.createClass({
    getInitialState: function(){
        return {
            discussions : DiscussionStores.getAll()
        }
    },
    componentDidMount: function() {
      DiscussionStores.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      DiscussionStores.removeChangeListener(this._onChange);
    },
    render : function(){
        return (
            <div>
                <DiscussionAdd/>
                <DiscussionMain discussions={this.state.discussions}/>
            </div>
        )
    },
    _onChange: function() {
      this.setState({
        discussions : DiscussionStores.getAll()
      });
    }
});

React.render(<App/>, document.getElementById('discussions'));