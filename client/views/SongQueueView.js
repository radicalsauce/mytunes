// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', function(){
      this.appendSong(this.collection.at(this.collection.length - 1));
    }, this);
    this.listenTo(this.collection, 'remove', function(){
      this.render();
    }, this);
  },

  events: {},

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueView({model: song}).render();
      })
    );
    // return this.$el;  <-- this code came w/ the example, not sure if needed
  },

  appendSong: function(song){
    var newSongView = new SongQueueEntryView({model: song});
    this.$el.append(newSongView.render());
  }//,

  // removeSong: function(song){
  //   var newSongView = new SongQueueEntryView({model: song});
  //   this.$el.detach(newSongView.render());
  // }

});
