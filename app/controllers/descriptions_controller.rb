class DescriptionsController < ApplicationController

  def index
    descriptions = Description.all
    descriptions_hash = {}

    descriptions.each do |d|
      descriptions_hash[d.id] = d.description
    end

    render json: descriptions_hash
  end

end