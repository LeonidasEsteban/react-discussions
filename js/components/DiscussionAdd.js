var React = require('react');
var ReactPropTypes = React.PropTypes;

var DiscussionActions = require('../actions/DiscussionActions');

var DiscussionAdd = React.createClass({
    propTypes: {
      // onSave: React.PropTypes.func.isRequired,
    },
    getInitialState : function(){
        return  {
            value : ""
        };
    },
    render: function(){
        return (
            <form onSubmit={this._onSubmit} className="DiscussionReplyForm">
                <textarea name="description" autoFocus onChange={this._onChange} value={this.state.value} placeholder="Write your question" className="DiscussionReplyForm-area"></textarea>
                <input type="submit" value="send" className="DiscussionReplyForm-submit"/>
            </form>
        )
    },
    _onChange: function(event) {
      this.setState({
        value: event.target.value
      });
    },
    _onSubmit : function(e){
        e.preventDefault();
        DiscussionActions.create(this.state.value);
        this.setState({
          value: ''
        });
    }
});

module.exports = DiscussionAdd;