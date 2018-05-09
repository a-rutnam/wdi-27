
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

# display empty form
get "/stock" do
  erb :form
end

# form submits to here; lookup stock and display result
get "/stock/quote" do
  @stock = StockQuote::Stock.quote( params[:symbol] )
  erb :quote
end
