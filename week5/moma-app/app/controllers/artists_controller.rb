
class ArtistsController < ApplicationController

  # CREATE
  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params

    # only redirect to index if the artist was successfully created
    # (i.e. if our validations did not cause the create to fail)
    if artist.persisted?
      redirect_to artists_path  # back to the index
    else
      flash[:errors] = artist.errors # this will be set ONLY for the next page load
      redirect_to artists_new_path
    end

  end

  # READ
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]   # /artists/:id
  end

  # UPDATE
  def edit
    @artist = Artist.find params[:id]  # /artists/:id/edit
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params

    if artist.errors.any?
      flash[:errors] = artist.errors
      redirect_to edit_artist_path( artist )
    else
      redirect_to artist_path( artist )   # can also write "redirect_to artist"
    end

  end

  # DELETE/DESTROY
  def destroy
    Artist.destroy params[:id]   # artist = Artist.find params[:id];  artist.destroy
    redirect_to artists_path
  end






  private

  # strong params: a doorman/bouncer who only lets through the specified form fieldset
  # (i.e. don't let users mess with forms and add 'is_admin' fields or similar)
  def artist_params
    params.require(:artist).permit( :name, :nationality, :dob, :period, :image, :roundness )
  end


end
