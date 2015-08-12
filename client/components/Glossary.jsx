var React = require('react');

var Glossary = React.createClass({
  getInitialState: function () {
    return {
      definitions: {},
      glossary: [],
    };
  },

  componentWillMount: function(){
    this.getDefinitionsFromAPI();
  },

  createGlossary: function() {
    for (var key in this.state.definitions) {
        this.state.glossary.push("" + key + ": " + this.state.definitions[key]);
      };
      alert(this.state.glossary[0]);
  },


  getDefinitionsFromAPI: function(){
    this.props.readFromAPI(this.props.origin + '/definitions', function(info){
      this.setState({definitions: info});
      this.createGlossary();
    }.bind(this));
  },

  render: function(){

    var listItems = this.state.glossary.map(function(item) {
      return <li> {item} </li>;
    });

    return (
      <div>
      Hello
        <ul>
          {listItems}
        </ul>
      </div>
    );
  },

});

module.exports=Glossary;