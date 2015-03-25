var React = require('react');


var DiscussionItem = require('./DiscussionItem');
var DiscussionStores = require('../stores/DiscussionStores');

var user = DiscussionStores.getUser();

var DiscussionReplyForm = React.createClass({
    getInitialState : function(){
        return  {
            value : ""
        }
    },
    render: function(){
        return (
            <form onSubmit={this._onSubmit} className="DiscussionReplyForm">
                <textarea name="description" autoFocus onChange={this._onChange} value={this.state.value} placeholder="Add your reply" className="DiscussionReplyForm-area"></textarea>
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
        e.preventDefault()
        // var reply = {
        //     value : this.state.value
        // }
        var user = DiscussionStores.getUser();
        
        var answers = this._owner.state.answers;

        answers.push(<DiscussionItem  text={this.state.value} user={user}/>);
        this._owner.setState({
            answers : answers,
            isReplying : false,
        })
    },

});

module.exports = DiscussionReplyForm;