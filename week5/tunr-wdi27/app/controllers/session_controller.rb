class SessionController < ApplicationController
  def new
  end

  def create

    # look up the user by the given email address
    user = User.find_by email: params[:email]

    if user.present? && user.authenticate( params[:password] )
      # correct credentials!
      # create a cookie which stores the Rails session, including the user ID
      session[:user_id] = user.id

      redirect_to profile_path
    else
      # bad credentials, i.e. unsuccessful login
      # set a flash message which will appear on the next page load only
      flash[:error] = "Invalid email address or password"
      redirect_to login_path
    end

  end

  def destroy
    session[:user_id] = nil  # this clears the cookie
    redirect_to login_path
  end

end
