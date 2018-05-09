
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# display empty form
get "/search" do
  erb :search_form
end

# form submits to here
get "/search/results" do

  # Make remote API request
  API_KEY = "API KEY FROM SLACK GOES HERE - DO NOT PUSH THE KEY TO GITHUB!"
  @query  = params[ :query ]

  url = "https://api.themoviedb.org/3/search/movie?api_key=#{ API_KEY }&query=#{ @query }"
  puts "API URL:", url

  @results = HTTParty.get( url )

  # allowed image sizes listed here:
  # https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400
  @img_base_url = "https://image.tmdb.org/t/p/w185"

  erb :search_results
end
