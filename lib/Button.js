/** @jsx React.DOM */

var React          = require('react');
var merge          = require('react/lib/merge');
var BootstrapMixin = require('./BootstrapMixin');

var Button = React.createClass({displayName: 'Button',
  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'button'
    };
  },

  renderAnchor: function (className) {
    return (
      React.DOM.a(
        {href:this.props.href,
        className:className,
        onClick:this.props.onClick,
        disabled:this.props.disabled}, 
        this.props.children
      )
    );
  },

  renderButton: function (className) {
    return (
      React.DOM.button(
        {type:this.props.type || "button",
        className:className,
        onClick:this.props.onClick,
        disabled:this.props.disabled}, 
        this.props.children
      )
    );
  },

  render: function () {
    var className = this.extendClassName();

    return (this.props.href) ?
      this.renderAnchor(className) : this.renderButton(className);
  }
});

module.exports = Button;