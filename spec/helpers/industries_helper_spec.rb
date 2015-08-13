require "rails_helper"

describe IndustriesHelper do
  describe "#industries_runner" do
    it "returns all the industries" do
      expect(helper.industries_runner).to be_an_instance_of(Industry::ActiveRecord_Relation)
    end
  end
end