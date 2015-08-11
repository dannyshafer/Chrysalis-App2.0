Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]

  get 'current_user', to: 'application#current_user'
  get 'request_token', to: 'tokens#request_token'
  get 'access_token', to: 'tokens#access_token'
  # get 'users/profile', to: 'users#profile'
  # put 'users/profile', to: 'users#update'
  get 'stocks/recommendations', to: 'stocks#recommendations'
  get 'stocks/update', to: 'stocks#update'

  resources :definitions, only: [:index]
  resources :users, only: [:index]
  resources :descriptions, only: [:index]
  resources :users, only: [:index] do
    get 'profile', to: 'users#profile'
    put 'profile', to: 'users#update'
    resources :baskets, only: [:index, :show, :create]
    get 'baskets/today', to: 'baskets#today'
  end
  resources :stocks, only: [:index]
  match '*all', to: 'application#index', via: [:get]
end
