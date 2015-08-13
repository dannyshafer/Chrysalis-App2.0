require "rails_helper"

describe StocksHelper do
  describe "#make_asi_component" do
    it "returns correct risk profile" do
      expect(helper.make_asi_component(1)).to eq(5)
    end
  end
end