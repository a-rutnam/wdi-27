class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :reservations

  # has_many :users, through: :reservations
  # we want to say: f.passengers (instead of f.users)
  has_many :passengers, through: :reservations

  def departure_date_formatted
    departure_date.strftime "%Y-%m-%d, %I:%M%P"
  end


end
