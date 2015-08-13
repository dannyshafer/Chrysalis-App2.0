var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var List = mui.List;
var ListItem = mui.ListItem;

var Glossary = React.createClass({
  getInitialState: function () {
    return {
      definitions: {},
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
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
      return <ListItem> {item} </ListItem>;
    });

    return (
      <div className="container">
      <h1>Glossary</h1>
        <List>
          {listItems}
        </List>
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
