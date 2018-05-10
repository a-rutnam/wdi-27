
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
  id = params[:id]
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true
  sql = "INSERT INTO animals (first_name, last_name, species, description, roundness, alive, age, image_url)
         VALUES(
           '#{ params["first_name"] }',
           '#{ params["last_name"] }',
           '#{ params["species"] }',
           '#{ params["description"] }',
            #{ params["roundness"] },
            #{ params["alive"] },
            #{ params["age"] },
           '#{ params["image_url"]}'
         );"
  result = db.execute( sql )
  puts result

  redirect "/animals"
end

get "/animals/:id" do
  id = params[:id]
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true
  @animal = db.execute( "SELECT * FROM animals WHERE id = #{ id };" )
  @animal = @animal.first

  erb :show
end
