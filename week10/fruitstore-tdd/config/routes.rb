Rails.application.routes.draw do
  resources :fruits, only: [:index]
  # get '/fruits' => 'fruits#index'
end
