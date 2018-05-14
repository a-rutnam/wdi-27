Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/hello" => "pages#say_hi"   # "controller#method"
  get "/about" => "pages#about"
  get "/lol"   => "pages#funny"

  # calculator
  get "/calc"                     => "calculator#home"
  get "/calc/:first/:op/:second"  => "calculator#do_calc"

  # form-based submit (values submitted via querystring,
  # still available in params)
  get "/calc/submit"              => "calculator#do_calc"


end
