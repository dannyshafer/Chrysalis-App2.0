class RecommendationsController < ApplicationController

  before_action :authenticate_request, only: [:recommendations]

  def recommendations
   stocks = []
   Recommendation.all.each do |i|
     begin
       if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
         stocks << i
       end
     rescue
     end
   end
   render json: stocks
 end

end
