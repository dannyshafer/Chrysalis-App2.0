require 'spec_helper'

describe Recommendation do
  it 'should create an instance of a recommendation' do
    s = Recommendation.create(ticker: "AAPL", industry: "Lightsabers", asi_component: 4, graham_number: 2.3)
    expect(s.ticker).to eq("AAPL")
    expect(s.industry).to eq("Lightsabers")
    expect(s.asi_component).to eq(4)
    expect(s.graham_number).to eq(2.3)
  end
end