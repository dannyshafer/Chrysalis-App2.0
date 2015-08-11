class BasketsController < ApplicationController
  before_action :authenticate_request, only: [:index, :show, :today]
  def index
  end

  def show
  end

  def today
    # fix the date
    basket = []

    @current_user.baskets.find_by(data: 'today').records.each do |record|
      basket << record
    end

    info = {today_basket: basket}
    render json: info
  end
end
