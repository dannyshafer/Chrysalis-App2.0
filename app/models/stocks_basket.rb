class StocksBasket < ActiveRecord::Base
  belongs_to :stock
  belongs_to :basket
end
