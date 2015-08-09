class StocksController < ApplicationController
  def index
    @stocks = Stock.all
    render json: @stocks
  end

end
