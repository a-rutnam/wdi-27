Rails.application.routes.draw do
  resources :dogs
  resources :fruits, only: [:index, :create, :show]
  # get '/fruits' => 'fruits#index'
  # post '/fruits' => 'fruits#create'
end
