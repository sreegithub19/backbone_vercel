import $ from "jquery";
import Backbone from "backbone";
$(document).ready(function() {
  var AppView = Backbone.View.extend({
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(`
      <h1>Hello World</h1>
      `);
    }
  });
  new AppView({ el: $("#app") });
});
