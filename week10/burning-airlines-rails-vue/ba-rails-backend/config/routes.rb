Rails.application.routes.draw do

  get '/flights/search' => 'flights#search'

  get '/flights/:id' => 'flights#show'

end
