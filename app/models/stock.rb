class Stock < ActiveRecord::Base
  has_many :stocks_baskets
end
