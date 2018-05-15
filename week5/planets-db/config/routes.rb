Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CREATE
  get "/planets/new"  => "planets#new"
  post "/planets"     => "planets#create"

  # READ
  get "/planets"      => "planets#index"
  get "/planets/:id"  => "planets#show", as: "planet" # define the name of the path helper
                                                      # (here it will be 'planet_path')

  # UPDATE
  get "/planets/:id/edit"   => "planets#edit", as: "planet_edit"   # planet_edit_path
  post "/planets/:id"       => "planets#update"

  # DELETE/DESTROY
  get "/planets/:id/delete" => "planets#destroy", as: "planet_destroy" # planet_destroy_path

end
