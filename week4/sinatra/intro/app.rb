
require 'sinatra'
require 'sinatra/reloader'

get "/" do
  puts "Someone requested the root URL"
  "Hello World from the root URL of this fantastic site!"
  erb :home   # looks in views/home.erb (but looks for layout.erb first as main template)
end

get "/hello" do
  "Hello world from /hello path"
end

get "/luckynumber" do
  number = Random.rand(1..200)
  "<h1>Here is your lucky number: #{ number }</h1>"
end

# Dynamic URL routing
get "/hello/:name" do
  first_name = params[ :name ]
  "Hello, #{ first_name }. Welcome to the Best Website Ever."
end

get "/hello/:first_name/:last_name" do
  puts "="*100
  p params
  puts "="*100
  "Hello, #{ params[:first_name] }, last name #{ params[:last_name] }. Welcome to the Best Website Ever."
end

get "/add/:x/:y" do
  @x = params[ :x ].to_i
  @y = params[ :y ].to_i
  @result = @x + @y
  @operation = "+"
  # "The sum of #{ params[:x] } and #{params[:y]} is #{ result }"
  # erb :add
  erb :calc
end

get "/sub/:x/:y" do
  @x = params[ :x ].to_i
  @y = params[ :y ].to_i
  @result = @x - @y
  @operation = "-"
  # "The difference of #{ params[:x] } and #{params[:y]} is #{ result }"
  # erb :sub
  erb :calc
end

# get "/:operation/:x/:y" do
#   x = params[:x].to_i
#   y = params[:y].to_i
#   op = params[ :operation ]
#   #
#   # result = case op
#   # when 'add' then  x + y
#   # when 'sub' then  x - y
#   # end
#
#   # e.g. /+/4/5 or /-/4/5
#
#   result = x.send(op, y)
#
#   "#{ x } #{ op } #{ y } = #{ result }"
# end

# show empty form
get "/calc/form" do
  erb :calcform
end

# form submits to here, and we display the result
get "/calc/result" do
  @first = params[:first].to_i
  @second = params[:second].to_i
  @op = params[ :op ]

  @result = @first.send(@op, @second)

  erb :calcresult
end
