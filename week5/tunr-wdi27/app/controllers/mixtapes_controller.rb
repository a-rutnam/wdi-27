class MixtapesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  before_action :get_mixtape,    only: [:show, :edit, :update, :destroy]  # will set @mixtape
  before_action :check_is_owner, only: [:edit, :update, :destroy]

  def new
    @mixtape = Mixtape.new
  end

  def create
    # mixtape = Mixtape.create mixtape_params
    mixtape = Mixtape.new mixtape_params
    mixtape.user = @current_user   # mixtape.user_id = @current_user.id
    mixtape.save

    redirect_to mixtapes_path
  end

  def show
  end

  def index
    @mixtapes = Mixtape.all
  end

  def edit
  end

  def update
    @mixtape.update mixtape_params
    redirect_to @mixtape   # go to show page
  end

  def destroy
    # thanks to before_action, two things are done before this method is called:
    # get_mixtape (which sets @mixtape)
    # check_is_owner (which makes sure @current_user.id == @mixtape.user_id)
    @mixtape.destroy
    redirect_to mixtapes_path
  end

  private
  def mixtape_params
    params.require(:mixtape).permit(:title, :image)
  end

  def get_mixtape
    @mixtape = Mixtape.find params[:id]
  end

  def check_is_owner
    # prevent users from sneakily editing other user's mixtapes by changing the form action
    redirect_to( mixtapes_path ) and return unless @current_user.id == @mixtape.user_id
  end

end
