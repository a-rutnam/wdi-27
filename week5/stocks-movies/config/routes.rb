Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "stocks#search_form"  # what do do for the "/" URL

  get "/stocks"        => "stocks#search_form"
  get "/stocks/lookup" => "stocks#search_results"

  # movies
  get "/movies"         => "movies#search_form"
  get "/movies/results" => "movies#results"
  get "/movies/:id"     => "movies#show"
end
