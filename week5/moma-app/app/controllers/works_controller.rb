class WorksController < ApplicationController

  def new
    @work = Work.new
  end

  def create
    Work.create work_params  # use strong params to prevent form haxx00rs
    redirect_to works_path   # back to index
  end

  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]   # /works/:id
  end

  def edit
    @work = Work.find params[:id]   # /works/:id/edit
  end

  def update
    work = Work.find params[:id]   # PATCH /works/:id
    work.update work_params
    redirect_to work
    # same as redirect_to work_path( work), because show is the default crud action
  end

  def destroy
    Work.destroy params[:id]
    redirect_to works_path  # index
  end

  private

  def work_params
    params.require(:work).permit(:title, :year, :style, :medium, :image, :artist_id)
  end

end
