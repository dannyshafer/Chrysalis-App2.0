class Basket < ActiveRecord::Base
  belongs_to :user
  has_many :stocks_baset
end
