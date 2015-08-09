Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :stocks, only: [:index]
end
