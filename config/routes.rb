Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]

  get 'current_user', to: 'application#current_user'
  get 'request_token', to: 'tokens#request_token'
  get 'access_token', to: 'tokens#access_token'
  get 'users/profile', to: 'users#profile'
  put 'users/profile', to: 'users#update'

  resources :users, only: [:index]
  resources :stocks, only: [:index]
end
