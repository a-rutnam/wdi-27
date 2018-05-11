
require 'sinatra'
require 'sinatra/reloader'
# require 'sqlite3' # HAHAHAHAHA
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "database.db"
)
ActiveRecord::Base.logger = Logger.new( STDERR )

class Animal < ActiveRecord::Base
  has_many :spotters   # this requires the animal_id field in spotters
end

class Spotter < ActiveRecord::Base
  belongs_to :animal   # requires the animal_id field in this class's table
end

# def db_query( sql )
#   db = SQLite3::Database.new( "database.db" ) # make a connection
#   db.results_as_hash = true  # easier to access results as hash keys
#   puts "=" * 100
#   puts sql   # debugging output
#   puts "=" * 100
#   result = db.execute( sql )  # run the query
#   db.close   # close the connection
#   result
# end


# CREATE part 1: show empty form
get "/animals/new" do
  erb :animals_new
end

# CREATE part 2: new.erb form submits here; create row in DB
# This route does not have its own template, it just redirects elsewhere
post "/animals" do
  # sql = "INSERT INTO animals (first_name, last_name, species, description, roundness, alive, age, image_url)
  #        VALUES(
  #          '#{ params["first_name"] }',
  #          '#{ params["last_name"] }',
  #          '#{ params["species"] }',
  #          '#{ params["description"] }',
  #           #{ params["roundness"] },
  #           #{ params["alive"] },
  #           #{ params["age"] },
  #          '#{ params["image_url"]}'
  #        );"
  # db_query( sql )

  animal = Animal.new  # create a new empty object which is an instance of Animal

  # set its table fields (by setting values into attributes of the object)
  animal.first_name  = params[:first_name]
  animal.last_name   = params[:last_name]
  animal.species     = params[:species]
  animal.description = params[:description]
  animal.roundness   = params[:roundness]
  animal.alive       = params[:alive]
  animal.age         = params[:age]
  animal.image_url   = params[:image_url]

  animal.save  # store the new object in the database

  # Animal.create(
  #   first_name: params[:first_name],
  #   last_name:  params[:first_name], # ...
  # )


  redirect "/animals"
end



# READ variation 1: index page (all items in table)
get "/animals" do
  # @animals = db_query( "SELECT * FROM animals;" )
  @animals = Animal.all
  erb :animals_index
end

# READ variation 2: show page (details for a single item)
get "/animals/:id" do
  # @animal = db_query( "SELECT * FROM animals WHERE id = #{ params["id"] };" )
  # # We always get an array of rows from a SELECT, even if only one row is returned
  # # ...so we use .first (same as @animal[0]) to deal with just the hash,
  # # instead of an array with a single hash element in it
  # @animal = @animal.first
  @animal = Animal.find params[:id]
  erb :animals_show
end



# UPDATE part 1: show edit form
get "/animals/:id/edit" do
  # retrieve the item from the database, so we can populate the form with its fields
  # @animal = db_query( "SELECT * FROM animals WHERE id = #{ params[:id] };" )
  # @animal = @animal.first
  @animal = Animal.find params[:id]   # parentheses are optional
  erb :animals_edit
end

# UPDATE part 2: edit.erb form submits to here so we can update DB with data from form
# This route does not have its own template, it just redirects elsewhere
post "/animals/:id" do
    # sql = "UPDATE animals SET
    #   first_name  = '#{ params["first_name"] }',
    #   last_name   = '#{ params["last_name"] }',
    #   species     = '#{ params["species"] }',
    #   description = '#{ params["description"] }',
    #   roundness   =  #{ params["roundness"] },
    #   alive       =  #{ params["alive"] },
    #   age         =  #{ params["age"] },
    #   image_url   = '#{ params["image_url"]}'
    #   WHERE id = #{ params[:id] };"
    # db_query( sql )

    animal = Animal.find params[:id]
    animal.first_name  = params[:first_name]
    animal.last_name   = params[:last_name]
    animal.species     = params[:species]
    animal.description = params[:description]
    animal.roundness   = params[:roundness]
    animal.alive       = params[:alive]
    animal.age         = params[:age]
    animal.image_url   = params[:image_url]

    animal.save  # store the new attributes in the database

    ## shorter version:
    # animal.update(
    #   first_name: params[:first_name],
    #   last_name: params[:last_name], #...
    # )



    redirect "/animals/#{ params["id"] }"
end



# DELETE: remove item from DB and redirect to index
get "/animals/:id/delete" do
  # db_query( "DELETE FROM animals WHERE id = #{ params["id"] };" )

  animal = Animal.find params[:id]  # first retrieve the row
  animal.destroy  # then call the destroy method on the returned object

  # One-liner using method chaining:
  # Animal.find( params[:id] ).destroy

  redirect "/animals"
end


# Spotters CRUD system

# CREATE part 1: empty form
get "/spotters/new" do
  erb :spotters_new
end

# CREATE part 2: form submits to here
post "/spotters" do

  spotter = Spotter.new
  spotter.name = params[:name]
  spotter.location = params[:location]
  spotter.spotted = params[:spotted]
  spotter.animal_id = params[:animal_id]

  spotter.save

  redirect "/spotters"
end

# READ 1: index of all spotters
get "/spotters" do
  @spotters = Spotter.all
  erb :spotters_index
end

# READ 2: show page for a specific spotter
get "/spotters/:id" do
  @spotter = Spotter.find params[:id]
  erb :spotters_show
end
