class DefinitionsController < ApplicationController
  def index

  end

  private
    def info_params
      params.require(:info).permit(:risk_preference, :age)
    end
end