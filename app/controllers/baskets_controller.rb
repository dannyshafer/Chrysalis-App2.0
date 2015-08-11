class BasketsController < ApplicationController
  before_action :authenticate_request, only: [:index, :show, :today, :create]

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

    @current_user.baskets.find_by(date: 'today').records.each do |record|
      basket << record
    end

    info = {today_basket: basket}
    render json: info
  end

  def create
    basket = @current_user.baskets.create(date: Time.now())

    info_params.each do |stock|
      basket.records.create(

        )
    end
    basket.records.create()

  end

  private
    def info_params
      params.require(:info).permit(:basket)
    end

end
