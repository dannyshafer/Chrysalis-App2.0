class DefinitionsController < ApplicationController
  def index
    definitions = Definition.all
    definitions_hash = {}

    definitions.each do |d|
      definitions_hash[d.term] = d.explanation
    end

    render json: definitions_hash
  end

end