var React = require('react');

var ProfileContainer= React.createClass({
  getInitialState: function(){
    return{
      stocks: []
    };
  },
  componentDidMount: function(){
    this.readStocksFromApi();
  },
  readStocksFromApi: function(){
    this.props.readFromAPI(this.props.origin + '/stocks', function(stocks){
      this.setState({stocks: stocks});
    }.bind(this));
  },

  render: function(){
    return(
      <div>
        <h4>ProfileContainer</h4>
        <h3>{this.state.stocks}</h3>
      </div>
      );
  },
});

module.exports=ProfileContainer
