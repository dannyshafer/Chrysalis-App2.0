require "rails_helper"

describe DescriptionsController do
  render_views

  describe "GET index" do
    it "returns a string object" do
      get :index
      expect(response.body.class).to eq(String)
    end
  end

end