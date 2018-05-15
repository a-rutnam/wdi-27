
class PlanetsController < ApplicationController

  # stop rails from doing some (useful!) security checking
  # (we will re-enable this when we use Rails form helpers
  # to construct our forms)
  skip_before_action :verify_authenticity_token, raise: false

  # CREATE 1: new form
  def new
  end

  # CREATE 2: form submits here
  def create

    Planet.create(
      name: params[:name],
      image: params[:image],
      orbit: params[:orbit],
      diameter: params[:diameter],
      mass: params[:mass],
      temperature: params[:temperature],
      moons: params[:moons]
    )

    # create has no template of its own
    redirect_to( planets_path )

  end

  # READ: index of all planets
  def index
    @planets = Planet.all
  end

  # READ: show details for one planet
  def show
    @planet = Planet.find params[:id]  # id comes from the route "/planets/:id"
  end

  # UPDATE 1: show pre-filled edit form
  def edit
    @planet = Planet.find params[:id]  # id comes from the route "/planets/:id/edit"
  end

  # UPDATE 2: form submits here
  def update
    planet = Planet.find params[:id]
    planet.update(
      name: params[:name],
      image: params[:image],
      orbit: params[:orbit],
      diameter: params[:diameter],
      mass: params[:mass],
      temperature: params[:temperature],
      moons: params[:moons]
    )

    redirect_to planet_path(planet.id)  # redirect to the show page for this planet id
  end


  # DELETE
  def destroy
    planet = Planet.find params[:id]
    planet.destroy

    redirect_to planets_path
  end

end
