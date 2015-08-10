class User < ActiveRecord::Base
  validates_presence_of :uid, :handle
  has_many :baskets
end
