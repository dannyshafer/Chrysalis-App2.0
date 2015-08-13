require 'spec_helper'

describe Stock do
  before :each do
    @s = Stock.create(ticker: "AAPL", name: "Apple Inc.", industry: "computers")
  end

  it 'should create an instance of a stock' do
    expect(@s).to be_an_instance_of Stock
  end

  it 'should return the correct name and industry' do
    expect(@s.name).to eq("Apple Inc.")
    expect(@s.industry).to eq("computers")
  end
end