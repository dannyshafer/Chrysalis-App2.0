class RecordsBasket < ActiveRecord::Base
  belongs_to :basket
  belongs_to :record
end
