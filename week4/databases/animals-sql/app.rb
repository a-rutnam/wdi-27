
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# index of all animals
get "/animals" do
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true
  @animals = db.execute( "SELECT * FROM animals;" )

  erb :index
end

# show Add Animal form
get "/animals/new" do
  erb :new
end

# Add Animal form submits here, to actually create row in DB
post "/animals" do
  puts "="*100
  p params
  "Submitted"
end

get "/animals/:id" do
  id = params[:id]
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true
  @animal = db.execute( "SELECT * FROM animals WHERE id = #{ id };" )
  @animal = @animal.first

  erb :show
end
