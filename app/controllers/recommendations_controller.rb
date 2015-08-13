class RecommendationsController < ApplicationController

  before_action :authenticate_request, only: [:recommendations]

 def recommendations
  stocks_1 = []
  stocks_2 = []
  stocks_3 = []
  stocks_4 = []
  stocks_5 = []
  stocks_6 = []
  stocks_7 = []
  stocks_8 = []
  stocks_9 = []
  stocks_10 = []

  Recommendation.where(asi_component: 1).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_1 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 2).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_2 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 3).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_3 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 4).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_4 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 5).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_5 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 6).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_6 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 7).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_7 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 8).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_8 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 9).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_9 << i
    end
    rescue
    end
  end

  
  Recommendation.where(asi_component: 10).each do |i|
    begin
    if (i.eps_v_ind.to_f >= 0) && (i.peg_v_ind.to_f <= 0) && (i.graham_number.to_f > i.bid.to_f) && (i.pe_v_ind <= 0)
      stocks_10 << i
    end
    rescue
    end
  end

  
  @stocks = {stocks_1: stocks_1, 
   stocks_2: stocks_2,
   stocks_3: stocks_3,
   stocks_4: stocks_4,
   stocks_5: stocks_5,
   stocks_6: stocks_6,
   stocks_7: stocks_7,
   stocks_8: stocks_8,
   stocks_9: stocks_9,
   stocks_10: stocks_10,
 }
 render json: @stocks
end

end
