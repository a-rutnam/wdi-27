class ApplicationController < ActionController::Base

  before_action :fetch_user

  private

  def fetch_user

    # Retrieve the currently-logged-in user's row from the database
    # (if they *are* actually logged in)
    if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id]
    end

    # Just in case we're dealing with a stale user ID
    # (i.e. an ID which no longer exists in the database)
    # we should delete the bad session
    session[:user_id] = nil unless @current_user.present?

  end

end
