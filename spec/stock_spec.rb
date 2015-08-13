require 'spec_helper'

describe Stock do
  it 'should create an instance of a stock' do
    s = Stock.create(ticker: "AAPL", name: "Apple Inc.", industry: "computers")
    expect(s.ticker).to eq("AAPL")
    expect(s.name).to eq("Apple Inc.")
    expect(s.industry).to eq("computers")
  end
end