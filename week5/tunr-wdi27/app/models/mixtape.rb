class Mixtape < ApplicationRecord
  has_and_belongs_to_many :songs     # gives us Mixtape.first.songs

  belongs_to :user, optional: true   # gives us Mixtape.first.user

end
