class FlightsController < ApplicationController

  before_action :authenticate_user, only: [ :show ]

  def search

    puts "origin: #{params[:origin]}"
    puts "destination: #{params[:destination]}"

    results = Flight.where origin: params[:origin], destination: params[:destination]

    # sleep 2  # simulate a slow network response (good for testing mobile!)

    render({
      json: results,
      # include: [ :airplane ],  # renders all fields of assocation
      include: { airplane: { only: :name } }, # force ActiveRecord associations to be included
      methods: :departure_date_formatted,  # call this method for every object and include it
      status: :ok
    })
  end

  def show

    # Knock provides the current_user method to return the user (if any) that was
    # successfully authenticated via the `/user_token` route
    p current_user

    flight = Flight.find params[:id]

    render({
      json: flight,
      include: {
        reservations: { except: [:paid, :created_at, :updated_at] },
        airplane:     { only:   [:rows, :cols, :name] }
      },
      methods: :departure_date_formatted,
      status: :ok
    })
  end

end
