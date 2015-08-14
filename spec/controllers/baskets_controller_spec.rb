require "rails_helper"

describe BasketsController do
  render_views

  describe "GET index" do
    it "responds" do
      expect(response.class).to eq(ActionController::TestResponse)
    end
  end

end