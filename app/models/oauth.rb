class Oauth < ActiveRecord::Base
  validates_presence_of :token, :secret
end
