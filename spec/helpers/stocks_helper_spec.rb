require "rails_helper"

describe StocksHelper do
  describe "#make_asi_component" do
    it "returns correct risk profile" do
      expect(helper.make_asi_component(1)).to eq(5)
    end
  end

  describe "#compare_basket_performance" do
    it "returns a string" do
      expect(helper.compare_basket_performance).class == ("String")
    end
  end
end