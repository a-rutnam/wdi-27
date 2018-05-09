
require 'socket'

server = TCPServer.open( 2000 )  # open a socket connection on port 2000

loop do

  puts "Waiting for requests..."

  client_connection = server.accept()  # start listening for a new connection request
  puts "Got connection!"

  request = client_connection.recv( 1024 )
  puts "Got request data:", request
  parts = request.split(' ')
  path = parts[1]

  case path
  when "/"
    response = "HTTP/1.1 200 OK

    <html>
      <head>
        <style>
          body {
            background-color: rgb(200, 73, 199);
            font-family: 'Comic Sans MS';
          }
        </style>
      </head>
      <body>
        <h1>WELCOME TO MY HOME MADE WEBSITE!!!11!</h1>
        <p>I hope you liek it!!</p>
        <p>requested path: #{ path }</p>
      </body>
    </html>
    "

  when "/secretfiles"
    response = "HTTP/1.1 200 OK

  EVIL HAXOR! U CANNOT HAVE MY S33KRIT F1LEZZ!!!!1"

  else
    response = "HTTP/1.1 404 NOT FOUND

  Nope!"
  end

  client_connection.write( response )
  client_connection.close()

end  # end of main server loop
