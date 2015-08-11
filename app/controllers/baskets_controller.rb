class BasketsController < ApplicationController
  before_action :authenticate_request, only: [:index, :show, :today]

  def index
    baskets = []

    @current_user.baskets.all.each do |basket|
      basket = []
      basket.records.each do |record|
        basket << record
      end
      baskets << basket
    end

    info = {baskets: baskets}
    render json: info
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
