var React = require('react');

var DiscussionActions = require('../actions/DiscussionActions');

var DiscussionAdd = require('./DiscussionAdd');
var DiscussionMain = require('./DiscussionMain');
var DiscussionFooter = require('./DiscussionFooter');

var Discussions = React.createClass({

    render : function(){
        return (
            <div className="DiscussionBody">
                <DiscussionAdd /> 
                <DiscussionMain />
                <DiscussionFooter/>
            </div>
        )
    },
})

var DiscussionUser = React.createClass({
    getInitialState : function(){
        return {
            active : true,
            name : "",
            avatar : "",
        }
    },
    
    render : function(){
        if(this.state.active){
            return (
                <form onSubmit={this._onSubmit} className="DiscussionUser">
                    <label className="label_A">What's your name?</label>
                    <input 
                        type="text" 
                        name="name"
                        className="input_A"
                        placeholder="Write your name"
                        value={this.state.name}
                        onChange={this._onChange}
                    />
                    <label className="label_A">Paste an image url for your avatar</label>
                    <input 
                        type="text" 
                        name="avatar"
                        className="input_A"
                        placeholder="example : https://pbs.twimg.com/profile_images/480073396072742912/h6VGOhH6.jpeg"
                        value={this.state.avatar}
                        onChange={this._onChange}
                    />
                    <input type="submit" value="Enter" className="btn-Red btn--big"/>
                </form>
            )
        }else{
            return null
        }
    },

    _onChange : function(e){
        var setValue = {}
        setValue[e.target.name] = e.target.value;
        this.setState(setValue);
    },
    _onSubmit : function(e){
        e.preventDefault();
        this.setState({
            active : false,
        })
        var avatar, name;
        if(this.state.avatar === ""){
            avatar = "https://static.platzi.com/media/avatares/default.png"
        }else{
            avatar = this.state.avatar
        }
        if(this.state.name === ""){
            name = "Guest"
        }else{
            name = this.state.name
        }
        DiscussionActions.setUser({
            name : name,
            avatar : avatar,
        })
        React.render(<Discussions />, document.getElementById('discussions'));
    }
})

module.exports = DiscussionUser;