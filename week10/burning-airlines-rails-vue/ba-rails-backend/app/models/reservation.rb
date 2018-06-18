class Reservation < ApplicationRecord

  belongs_to :flight

  # belongs_to :user
  # we want res.passenger instead of res.user
  belongs_to :passenger, class_name: :User, foreign_key: 'user_id'

end
