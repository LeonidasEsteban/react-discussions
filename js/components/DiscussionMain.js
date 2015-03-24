var React = require('react');

var DiscussionItem = require('./DiscussionItem');

var DiscussionMain = React.createClass({
    render : function(){
        var AllDiscussions = this.props.discussions;
        var discussions = []
        
        for (var key in AllDiscussions) {
          discussions.push(<DiscussionItem text={AllDiscussions[key].text} />);
        }
        console.log(discussions);
        return(
            <div className="Discussion-list">
                {discussions}
            </div>
        )
    }
});


module.exports = DiscussionMain;