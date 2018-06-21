class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse

    respond_to do |format|
      format.html
      format.json { render json: @fruits, status: :ok }
    end

  end # index

  def create
    fruit = Fruit.create fruit_params
    if fruit.persisted?
      redirect_to fruit  # same as redirect_to fruit_path( fruit )
    else
      render :new
    end
  end

  private

  def fruit_params
    params.require(:fruit).permit(:name)
  end


end
