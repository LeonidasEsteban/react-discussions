
var DiscussionDispatcher = require('../dispatchers/DiscussionDispatcher');
var DiscussionConstans = require('../constans/DiscussionConstans');

var DiscussionActions = {
    create : function(text){
        DiscussionDispatcher.dispatch({
          actionType: DiscussionConstans.DISCUSSION_CREATE,
          text: text
        });
    }
}

module.exports = DiscussionActions;

