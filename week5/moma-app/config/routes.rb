Rails.application.routes.draw do

  root to: "artists#index" # / default route

  # CREATE
  get  "/artists/new" => "artists#new"     # path helper: artists_new_path
  post "/artists"     => "artists#create"  # just use the index artists_path helper for this

  # READ
  get "/artists"     => "artists#index"  # automatically get a path helper 'artists_path'
  get "/artists/:id" => "artists#show", as: "artist"   # gives us 'artist_path( id )' helper

  # UPDATE
  get   "/artists/:id/edit" => "artists#edit", as: "edit_artist"  # gives us 'edit_artist_path'
  patch "/artists/:id"      => "artists#update"  # just use 'artist_path' from the show page

  # DESTROY
  delete "/artists/:id" => "artists#destroy"

  # works:

  # go to localhost:3000/rails/info/routes to see all the CRUD routes this one line gives you!
  resources :works


end
