class Record < ActiveRecord::Base
  has_many :records_baskets
  has_many :baskets, through: :records_baskets
end
