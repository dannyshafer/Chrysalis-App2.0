var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var List = mui.List;
var ListItem = mui.ListItem;

var Glossary = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function(){

    return (
      <div className="container">
      <h1 className="page-header">Glossary</h1>
        <List>
          <ListItem>
            <p className="glossary-term">Stock:</p>
            <p>A fractional ownership of a company and a residual claim on its earnings.</p>
          </ListItem>
          <ListItem>
            <p className="glossary-term">EPS:</p>
            <p>Profit divided by number of common outstanding shares. If a company earning $2 million in one year had 2 million common shares of stock outstanding, its EPS would be $1 per share.</p>
          </ListItem>
          <ListItem>
            <p className="glossary-term">PE:</p>
            <p>A ratio for valuing a company that measures its current share price relative to its per-share earnings. The price-earnings ratio can be calculated as: Market Value per Share / Earnings per Share.</p>
          </ListItem>
          <ListItem>
            <p className="glossary-term">Dividend:</p>
            <p>A sum of money paid regularly (typically quarterly) by a company to its shareholders out of its profits (or reserves).</p>
          </ListItem>
          <ListItem>
            <p className="glossary-term">PEG:</p>
            <p>Measures stock price versus earnings and expected growth. In general, lower is better as it is cheaper to acquire shares for expected earnings growth.</p>
          </ListItem>
          <ListItem>
            <p className="glossary-term">Beta (β):</p>
            <p>A measure of volatility relative the stock market as a whole, which has a beta of 1. Higher than 1 implies more volatile than the market while less than 1 implies less volatile than the market.</p>
          </ListItem>
        </List>
      </div>
    );
  },

});



module.exports = Glossary;



// "Stock" => "A fractional ownership of a company and a residual claim on its earnings.",
//   "EPS" => "The amount of profits a company has generated over the number of shares are outstanding in the market.",
//   "PE" => "Price per dollar of earnings tells how much investors are willing to pay for expected profits in the future. Higher means that investors are expecting the company to earn more.",
//   "Book value per share" => "How much ownership of a company each share represents (using total shareholder equity as a measure of the value of the whole company)",
//   "Dividend" => "Residual earnings paid to shareholders on a regular basis, if at all",
//   "Dividend Yield" => "The percent of total share price that a company's dividend represents. (i.e. a 1 dollar dividend on a hundred dollar per share stock would be a 1% dividend yield)",
//   "PEG" => "Measures stock price versus earnings and expected growth. Lower is better as it is cheaper to acquire shares for expected earnings growth.",
//   "Beta (β) " => "A measure of volatility relative the stock market as a whole, which has a beta of 1. Higher than 1 implies more volatile than the market while less than 1 implies less volatile than the market."

