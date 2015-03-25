var React = require('react')
var DiscussionStores = require('../stores/DiscussionStores');


var DiscussionFooter = React.createClass({
    getInitialState : function(){
        return {
            user : DiscussionStores.getUser()
        }
    },
    render : function(){
        return (
            <footer className="DiscussionFooter">Hi {this.state.user.name} <img src={this.state.user.avatar} alt={this.state.user.name}/></footer>
        )
    }
})

module.exports = DiscussionFooter;