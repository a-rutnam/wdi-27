Rails.application.routes.draw do
  resources :dogs

  get "/search" => "dogs#search", as: :dog_search  # gives us dog_search_path

end
