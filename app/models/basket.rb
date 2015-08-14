class Basket < ActiveRecord::Base
  belongs_to :user
  has_many :records_baskets
  has_many :records, through: :records_baskets

  def performance
    compare_basket_performance
  end

  private

  def compare_basket_performance
    tickers = self.records.map(&:ticker)

    container = []
    doc = Nokogiri::HTML(open("https://www.google.com/finance/historical?q=INDEXSP:.INX"))
    doc.css('.rgt').each do |i|
      container << i.text[0..7]
    end

    index_week_end = container[8].gsub(/[^\d^\.]/, '').to_f
    index_week_start = container[27].gsub(/[^\d^\.]/, '').to_f
    index_week_performance = ((index_week_end - index_week_start) / index_week_end * 100).round(2)

    #this variable is where we put the symbols in a user's basket
    basket_week_performance = 0
    tickers.each do |i| #this line has to be edited to accomodate whatever the basket is called
      container2 = []
      doc2 = Nokogiri::HTML(open("http://finance.yahoo.com/q/hp?s=#{i}+Historical+Prices"))
      doc2.css('.yfnc_tabledata1').each do |i|
        if i.include?("Dividend")
          container2[i - 1].pop
          next
        else
          container2 << i.text
        end
      end
      stock_week_end = container2[4].gsub(/[^\d^\.]/, '').to_f
      stock_week_start = container2[31].gsub(/[^\d^\.]/, '').to_f
      basket_week_performance += (((stock_week_end - stock_week_start) / stock_week_end * 100).round(2))/tickers.length
    end

    if basket_week_performance > index_week_performance
      return "performed better than the market this past week by " + (basket_week_performance - index_week_performance).round(2).to_s + " percent."
    else
      return "underperformed the market this past week by " + (index_week_performance - basket_week_performance).round(2).to_s + " percent."
    end

  end

end
