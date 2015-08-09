Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]
  resources :users, only: [:index]
  resources :stocks, only: [:index]
end
