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

  getDefinitionsFromAPI: function(){
    this.props.readFromAPI(this.props.origin + '/definitions', function(info){
      this.setState({definitions: info});
    }.bind(this));
  },

  render: function(){

    var glossary = definitionsToGlossary(this.state.definitions);
    var listItems = glossary.map(function(item) {
      return <li> {item} </li>;
    });

    return (
      <div className="container">
      <h4>Glossary</h4>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  },

});

var definitionsToGlossary = function(definitions) {
    if (definitions === null) return [];
    var glossary = []
    for (var key in definitions) {
        glossary.push("" + key + ": " + definitions[key]);
      };
    return glossary;
  };

module.exports = Glossary;
