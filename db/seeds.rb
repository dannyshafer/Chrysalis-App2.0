# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

descriptions = {
  1 => "I'm very risk adverse and would be uncomfortable losing money. Ad praesens ova cras pullis sunt meliora ad quem ad quod: eggs today are better than chickens tomorrow.",
  2 => "I'm mostly risk adverse but want to get in the game. Abundans cautela non nocet: abundant caution does no harm.",
  3 => "I'm moderately risk averse. Something stable like a utilities company seems just about my speed. Mens sana in corpore sano: a sound mind in a sound body.",
  4 => "I'd like to invest but nothing too exotic: large department stores or a company that has a pretty solid position in its market like IBM would be cool. Astra inclinant, sed non obligant: the stars incline us, they do not bind us.",
  5 => "I'm not very risk seeking or averse. I wouldn't put all my eggs in one basket, but I definitely want to roll the dice a little bit. Audere est facere: to dare is to do.",
  6 => "I'm somewhat risk seeking. You can't make it big without putting it on the line. Fortes fortuna adiuvat: fortune favors the brave.",
  7 => "I'm moderately risk seeking. If I'm not eating my food, I should at least play with it. Nil volentibus arduum: nothing is arduous for the willing.",
  8 => "I'm mostly risk seeking. If my portfolio were to lose 10%, I'd buy more. A fire sale needs fuel after all. Fac fortia et patere: do brave deeds and endure.",
  9 => "I would buy Greek sovereign debt and short the market 2X. Vivere est vincere: to live is to conquer.",
  10 => "I'm aggressively risk seeking. I see green when there's blood on the Street. Flectere si nequeo superos, acheronta movebo: if I cannot move heaven, I will raise hell."
}

glossary = {
  "Stock" => "A fractional ownership of a company and a residual claim on its earnings.",
  "EPS" => "The amount of profits a company has generated over the number of shares are outstanding in the market.",
  "PE" => "Price per dollar of earnings tells how much investors are willing to pay for expected profits in the future. Higher means that investors are expecting the company to earn more.",
  "Book value per share" => "How much ownership of a company each share represents (using total shareholder equity as a measure of the value of the whole company)",
  "Dividend" => "Residual earnings paid to shareholders on a regular basis, if at all",
  "Dividend Yield" => "The percent of total share price that a company's dividend represents. (i.e. a 1 dollar dividend on a hundred dollar per share stock would be a 1% dividend yield)",
  "PEG" => "Measures stock price versus earnings and expected growth. Lower is better as it is cheaper to acquire shares for expected earnings growth.",
  "Beta" => "A measure of volatility compared to the overall stock market, which has a beta of 1. Higher than 1 implies more volatile than the market while less than 1 implies less volatile than the market."
}

descriptions.each do |key, value|
  Description.create(name: key, description: value)
end

glossary.each do |key, value|
  Definitions.create(name: key, description: value)
end