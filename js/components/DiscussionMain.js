var React = require('react');

var DiscussionItem = require('./DiscussionItem');
var DiscussionStores = require('../stores/DiscussionStores');

var DiscussionMain = React.createClass({
    getInitialState : function(){
        return {
            discussions : DiscussionStores.getAll()
        }
    },
    componentDidMount: function() {
      DiscussionStores.addChangeListener(this._onChange);
    },
    render : function(){
        var AllDiscussions = this.state.discussions;
        var discussions = []
        
        for (var key in AllDiscussions) {
          discussions.push(<DiscussionItem text={AllDiscussions[key].text} user={AllDiscussions[key].user} date={AllDiscussions[key].date} />);
        }
        return(
            <div className="Discussion-list">
                {discussions}
            </div>
        )
    },
    _onChange: function() {
      this.setState({
        discussions : DiscussionStores.getAll(),
      });
    }
});


module.exports = DiscussionMain;