require 'csv'
require 'json'
require 'HTTParty'

class StocksController < ApplicationController
  include StocksHelper
  before_action :authenticate_request, only: [:recommendations]

 def recommendations
   stocks_1 = []
   stocks_2 = []
   Stock.where(asi_component: 1).each do |i|
     if (i.eps.to_f > i.eps_v_ind.to_f) && (i.peg.to_f < i.peg_v_ind.to_f) && (i.graham_number.to_f > i.bid.to_f)
       stocks_1 << i
     end
   end
   Stock.where(asi_component: 2).each do |i|
     if (i.eps.to_f > i.eps_v_ind.to_f) && (i.peg.to_f < i.peg_v_ind.to_f) && (i.graham_number.to_f > i.bid.to_f)
       stocks_2 << i
     end
   end
   @stocks = {stocks_1: stocks_1, stocks_2: stocks_2}
   render json: @stocks
 end

 def index
   if !Stock.find_by(id: 1)
     make_dict
   end
   if !Stock.find_by(id: 2).pe
     populate_data
   else
     update_versus_index
   end
   @stocks = Stock.all
   render 'index'
 end


end

