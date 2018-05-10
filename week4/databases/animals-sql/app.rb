
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query( sql )
  db = SQLite3::Database.new( "database.db" ) # make a connection
  db.results_as_hash = true  # easier to access results as hash keys
  puts "=" * 100
  puts sql   # debugging output
  puts "=" * 100
  result = db.execute( sql )  # run the query
  db.close   # close the connection
  result
end

# index of all animals
get "/animals" do
  @animals = db_query( "SELECT * FROM animals;" )
  erb :index
end

# show Add Animal form
get "/animals/new" do
  erb :new
end

# Add Animal form submits here, to actually create row in DB
post "/animals" do
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
  db_query( sql )
  redirect "/animals"  # no template for the create, we redirect to the index instead
end

get "/animals/:id" do
  @animal = db_query( "SELECT * FROM animals WHERE id = #{ params["id"] };" )
  @animal = @animal.first # we always get an array of rows, even if there is only one row
  erb :show
end

get "/animals/:id/edit" do
  # retrieve the item from the database, so we can populate the form with its fields
  @animal = db_query( "SELECT * FROM animals WHERE id = #{ params["id"] };" )
  @animal = @animal.first
  erb :edit
end
