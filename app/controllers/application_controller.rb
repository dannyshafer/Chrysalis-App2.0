class ApplicationController < ActionController::API
  before_action :allow_cross_origin_requests, if: proc { Rails.env.development? }
  before_action :authenticate_request, only: [:current_user]

  def preflight
    render nothing: true
  end

  private

  def allow_cross_origin_requests
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    headers['Access-Control-Max-Age'] = '1728000'
  end

  def authenticate_request
    begin
      uid = JWT.decode(request.headers['Authorization'], ENV['SECRET_KEY_BASE'])[0]['uid']
      @current_user = User.find_by(uid: uid)
    rescue JWT::DecodeError
      render json: 'authentication failed', status: 401
    end
  end

  attr_reader :current_user

  def logged_in?
    !current_user.nil?
  end
  
end
