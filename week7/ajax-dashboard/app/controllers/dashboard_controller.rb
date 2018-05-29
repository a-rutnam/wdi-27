class DashboardController < ApplicationController

  def uptime
    @up = `uptime`
    render plain: @up  # render a string as plain text (not HTML)
  end

  def dogs
    render json: Dog.all   # render an ActiveRecord query result directly to JSON
  end

  def cpu_hog

    headers['Access-Control-Allow-Origin'] = '*'

    hog = `ps xr|head -n 2`.split("\n")[1]
    time = `date`

    response = {
      biggest_hog: hog,
      current_time: time
    }

    @hogdata = hog  # for the template response

    respond_to do |format|
      format.html # render default template, i.e. app/views/dashboard/cpu_hog.html.erb
      format.json {  render json: response  }  # render JSON for an AJAX request
    end

  end

  def app
    # this action just serves our SPA app page, including the Javascript which powers it
  end

end
