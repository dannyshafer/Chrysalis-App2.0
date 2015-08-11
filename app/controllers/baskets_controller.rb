require 'date'

class BasketsController < ApplicationController
  before_action :authenticate_request, only: [:index, :show, :today, :create]

  def index
    baskets = []

    @current_user.baskets.all.each do |basket|
      stocks = []
      basket.records.each do |record|
        stocks << record
      end
      baskets << stocks
    end
    p '**********'
    p baskets

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
    records_id = []

    info_params.each do |key, ticker|
      records_id << Record.find_by(ticker: ticker, date: DateTime.now.to_date).id
    end

    records_id.each do |id|
      basket.records_baskets.create(record_id: id)
    end
    render json: {message: "success"}
  end

  private
    def info_params
      params.require(:ids)
    end

end
