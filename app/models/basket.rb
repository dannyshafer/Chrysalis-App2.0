class Basket < ActiveRecord::Base
  belongs_to :user
  has_many :records_baskets
  has_many :records, through: :records_baskets
end
