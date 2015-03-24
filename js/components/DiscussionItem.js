var React = require('react');




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
            text : "Text default"
            // class : "Discussion-child"
        }
    },
    render : function(){
        // var answers;
        var replyForm;
        if(this.state.isReplying){
            replyForm = <DiscussionReplyForm/>
        }
        console.log(this.state.isReplying);
        // if(this.state.reply){
        //     answers = <DiscussionItem text={this.state.reply.value} />
        // }
        return  (
            <div className="Discussion is-first  is-shadow" >
                <div className="Discussion-wrapper">
                    <div className="Discussion-top">
                        <div className="DiscussionAuthor">
                            <span className="DiscussionAuthor-name">
                                <img src="https://avatars0.githubusercontent.com/u/1150114" className="DiscussionAuthor-avatar" width="40" height="40"/>
                                <a href="#" title="Ver perfil de usuario" target="_blank">LeonidasEsteban</a>
                            </span>
                        </div>
                        <div className="">
                            <span className="Discussion-date">Hace 2 horas</span>
                        </div>
                    </div>
                    <div className="Discussion-text">{this.props.text} </div>
                    <div className="Discussion-bottom">
                        <div className="Discussion-bottomLeft">
                            <span>
                                <span onClick={this._onUpVote} className="Discussion-vote Discussion-voteUp icon-plus_A "></span>
                                <span onClick={this._onDownVote} className="Discussion-vote Discussion-voteDown icon-minus_A "></span>
                                <span className="Discussion-points">{this.state.votes} punto</span>
                            </span>
                            <span onClick={this._onReply} className="icon-reply Discussion-reply">Responder</span>
                            <span className="Discussion-comments">2 comentarios</span>
                        </div>
                        <div className="Discussion-bottomRight">
                        </div>
                    </div>
                </div>
                <div className="Discussion-editor">
                    {replyForm}
                </div>
                <div className="Discussion-children">
                    {this.state.answers}
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
