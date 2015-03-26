
var DiscussionDispatcher = require('../dispatchers/DiscussionDispatcher');
var DiscussionConstans = require('../constans/DiscussionConstans');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;


var _discussions = {};
var CHANGE_EVENT = 'change';
var user = {};

function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _discussions[id] = {
    id: id,
    complete: false,
    text: text,
    user : user,
    date : Date()
  };
}




DiscussionDispatcher.register(function(action){
    switch(action.actionType) {
        case DiscussionConstans.DISCUSSION_CREATE:
        text = action.text.trim();
        if (text !== '') {
          create(text);
          DiscussionStores.emitChange();
        }
        break;

        case "SET_USER":
        user = action.user;
        break;
    }
})


var DiscussionStores = assign({}, EventEmitter.prototype, {
    getAll: function() {
      return _discussions;
    },
    getUser : function(){
      return user;
    },
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
})


module.exports = DiscussionStores;