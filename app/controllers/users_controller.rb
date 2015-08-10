class UsersController < ApplicationController
  before_action :authenticate_request, only: [:update, :profile]

  def index
    @users = User.all
    render json: @users
  end

  def update
    @current_user.update_attributes(info_params)
    render json: {message: "success"}
  end

  def profile
    info = {risk_preference: @current_user.risk_preference, age: @current_user.age}
    render json: info
  end

  private
    def info_params
      params.require(:info).permit(:risk_preference, :age)
    end

end
