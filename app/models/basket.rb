class Basket < ActiveRecord::Base
  belongs_to :user
  has_many :records_baskets
end
