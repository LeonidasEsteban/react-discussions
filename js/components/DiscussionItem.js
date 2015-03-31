var React = require('react/addons');
var moment = require('moment');
var addons = React.addons;
var CSSTransitionGroup =  addons.CSSTransitionGroup;



var ReactPropTypes = React.PropTypes;


var DiscussionItem = React.createClass({
    propTypes : {
        value: ReactPropTypes.string
    },
    getInitialState: function() {
       
        return {
            votes : 1,
            answers : [],
        };
    },
    getDefaultProps: function(){
        return {
            text : "Text default",
            level : 1,
        }
    },
    componentDidMount : function(){
        this.interval = window.setInterval(this.forceUpdate.bind(this), 60000);
    },
    render : function(){
        var replyForm;
        if(this.state.isReplying){
            replyForm = <DiscussionReplyForm/>
        }
        var date = moment(this.props.date).fromNow();
        return  (
            <div className="Discussion is-first  is-shadow">
                <div className="Discussion-wrapper">
                    <div className="Discussion-top">
                        <div className="DiscussionAuthor">
                            <span className="DiscussionAuthor-name">
                                <img src={this.props.user.avatar} className="DiscussionAuthor-avatar" width="40" height="40"/>
                                <a href="#" title="Ver perfil de usuario" target="_blank">{this.props.user.name}</a>
                            </span>
                        </div>
                        <div className="">
                            <span className="Discussion-date">{date}</span>
                        </div>
                    </div>
                    <div className="Discussion-text">{this.props.text} </div>
                    <div className="Discussion-bottom">
                        <div className="Discussion-bottomLeft">
                            <span>
                                <span onClick={this._onUpVote} className="Discussion-vote Discussion-voteUp icon-plus_A "></span>
                                <span onClick={this._onDownVote} className="Discussion-vote Discussion-voteDown icon-minus_A "></span>
                                <span className="Discussion-points">{this.state.votes} points</span>
                            </span>
                            {function(){
                                if(this.props.level < 3){
                                    return (
                                        <span>
                                            <span onClick={this._onReply} className="icon-reply Discussion-reply">Reply</span>
                                            <span className="Discussion-comments">{this.state.answers.length} answers</span>
                                        </span>
                                    )
                                }
                            }.bind(this)()}
                        </div>
                        <div className="Discussion-bottomRight">
                        </div>
                    </div>
                </div>
                <div className="Discussion-editor">
                    {replyForm}
                </div>
                <div className="Discussion-children">
                    <CSSTransitionGroup transitionName="Discussion-child">
                    {this.state.answers.reverse()}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    },
    _onUpVote : function(){
        this.setState({
            votes : this.state.votes + 1
        })
    },
    _onDownVote : function(){
        this.setState({
            votes : this.state.votes - 1
        })
    },
    _onReply : function(){

        this.setState({
            isReplying : true,
        })
    }
})

module.exports = DiscussionItem;


var DiscussionReplyForm = require('./DiscussionReplyForm');
