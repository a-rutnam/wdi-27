class SecretsController < ApplicationController

  # our frontend is not Rails, so we don't get the authenticity
  skip_before_action :verify_authenticity_token

  def index
    # secrets = Secret.all
    render json: Secret.all
  end

  def show
  end

  def create
    secret = Secret.create content: params['content']
    render json: { secret: secret, created: true }, status: :ok
  end
end
