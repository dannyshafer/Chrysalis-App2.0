require "rails_helper"

RSpec.describe RecommendationsController, :type => :controller do
  render_views

  describe "GET recommendations" do
    it "returns a json object" do
      get :recommendations
      expect(response.body).class == ("json")
    end
  end
end