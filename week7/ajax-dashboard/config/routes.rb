Rails.application.routes.draw do

  get '/uptime' => 'dashboard#uptime'

  get '/dashboard' => 'dashboard#app'

  get '/hog' => 'dashboard#cpu_hog'

  get '/dogs' => 'dashboard#dogs'

end
