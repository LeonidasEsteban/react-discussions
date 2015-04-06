var React = require('react/addons');
var addons = React.addons;
var CSSTransitionGroup =  addons.CSSTransitionGroup;

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
            active : false,
            name : "",
            avatar : "",
        }
    },
    componentDidMount : function(){
        console.log('After render');
        var self = this;
        setTimeout(function(){
            self.setState({
                active : true,
            })
        },1)
        this.interval = setInterval(function(){
            console.log('test');
        },1000)
    },
    componentWillUnmount : function(){
        clearInterval(this.interval);
        console.log('se quiere ir');
    },
    componentWillMount : function(){
        console.log('Before render')
    },
    render : function(){
        var form;
        if(this.state.active){
            form = (<form onSubmit={this._onSubmit} className="DiscussionUser" key={this.state.active}>
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
            </form>)

        }else{
            form = null
        }
        return (
            <CSSTransitionGroup transitionName="opacity">
                {form}
            </CSSTransitionGroup>
        )
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
        },function(){
            setTimeout(function(){
                React.unmountComponentAtNode(document.getElementById('discussions'));
                React.render(<Discussions />, document.getElementById('discussions'));
            },300)
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
    }
})

module.exports = DiscussionUser;