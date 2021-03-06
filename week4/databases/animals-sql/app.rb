
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


# CREATE part 1: show empty form
get "/animals/new" do
  erb :new
end

# CREATE part 2: new.erb form submits here; create row in DB
# This route does not have its own template, it just redirects elsewhere
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
  redirect "/animals"
end



# READ variation 1: index page (all items in table)
get "/animals" do
  @animals = db_query( "SELECT * FROM animals;" )
  erb :index
end

# READ variation 2: show page (details for a single item)
get "/animals/:id" do
  @animal = db_query( "SELECT * FROM animals WHERE id = #{ params["id"] };" )
  # We always get an array of rows from a SELECT, even if only one row is returned
  # ...so we use .first (same as @animal[0]) to deal with just the hash,
  # instead of an array with a single hash element in it
  @animal = @animal.first
  erb :show
end



# UPDATE part 1: show edit form
get "/animals/:id/edit" do
  # retrieve the item from the database, so we can populate the form with its fields
  @animal = db_query( "SELECT * FROM animals WHERE id = #{ params["id"] };" )
  @animal = @animal.first
  erb :edit
end

# UPDATE part 2: edit.erb form submits to here so we can update DB with data from form
# This route does not have its own template, it just redirects elsewhere
post "/animals/:id" do
    sql = "UPDATE animals SET
      first_name  = '#{ params["first_name"] }',
      last_name   = '#{ params["last_name"] }',
      species     = '#{ params["species"] }',
      description = '#{ params["description"] }',
      roundness   =  #{ params["roundness"] },
      alive       =  #{ params["alive"] },
      age         =  #{ params["age"] },
      image_url   = '#{ params["image_url"]}'
      WHERE id = #{ params[:id] };"

    db_query( sql )

    redirect "/animals/#{ params["id"] }"
end



# DELETE: remove item from DB and redirect to index
get "/animals/:id/delete" do
  db_query( "DELETE FROM animals WHERE id = #{ params["id"] };" )
  redirect "/animals"
end
