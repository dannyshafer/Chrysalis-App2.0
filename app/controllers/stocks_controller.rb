class StocksController < ApplicationController
  before_action :authenticate_request, only: [:index]
  def index
   stocks_1 = Stock.where(eps: 1)
   stocks_2 = Stock.where(eps: 2)

   @stocks = {stocks_1: stocks_1, stocks_2: stocks_2}
   p @stocks
   render json: @stocks
 end

end
