class Song < ApplicationRecord
  belongs_to :artist, optional: true   # gives us Song.first.artist   (via artist_id)
  belongs_to :album,  optional: true   # gives us Song.first.album    (via album_id)

  has_and_belongs_to_many :genres      # gives us Song.first.genres
  has_and_belongs_to_many :mixtapes    # gives us Song.first.mixtapes
end
