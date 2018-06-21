Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  get '/flights/search' => 'flights#search'

  get '/flights/:id' => 'flights#show'

end
