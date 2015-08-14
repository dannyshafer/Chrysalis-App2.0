class TokensController < ApplicationController

  def request_token
    oauth_callback = url_for(controller:'tokens', action:'access_token')
    request_token = TWITTER.get_request_token(oauth_callback: oauth_callback)
    Oauth.create(token: request_token.token, secret: request_token.secret)
    redirect_to request_token.authorize_url(oauth_callback: oauth_callback)
  end

  def access_token
    oauth = Oauth.find_by(token: params[:oauth_token])
    if oauth.present?
      request_token = OAuth::RequestToken.new(TWITTER, oauth.token, oauth.secret)
      access_token = request_token.get_access_token(oauth_verifier: params[:oauth_verifier])
      user = User.find_or_create_by(uid: access_token.params[:user_id], ) { |u| u.handle = access_token.params[:screen_name] }
      jwt = JWT.encode({uid: user.uid, exp: 1.day.from_now.to_i}, ENV['SECRET_KEY_BASE'])
      query = {jwt: jwt}.to_query
      redirect_to "/?#{query}"
    else
      redirect_to '/'
    end
  end
end
