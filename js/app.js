var React = require('react');


var DiscussionStores = require('./stores/DiscussionStores');


var DiscussionUser = require('./components/DiscussionUser');


var App = React.createClass({
    render : function(){
        return (
            <div>
                <DiscussionUser/>
            </div>
        )
    },
});

React.render(<App/>, document.getElementById('discussions'));