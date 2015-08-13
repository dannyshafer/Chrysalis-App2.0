class UsersController < ApplicationController
  before_action :authenticate_request

  def current
    render json: current_user, only: [:handle, :uid]
  end

  def index
    @users = User.all
  end

  def update
    current_user.update_attributes(info_params)
    render json: {message: "success"}
  end

  def profile
    if @current_user.age
      output = true
    else
      output = false
    end
    info = {risk_preference: @current_user.risk_preference, age: @current_user.age, ageSet: output}
    render json: info
  end

  private
    def info_params
      params.require(:info).permit(:risk_preference, :age)
    end

end
