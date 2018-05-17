class Genre < ApplicationRecord
  has_and_belongs_to_many :songs  # gives Genre.first.songs

  has_many :artists, through: :songs  # gives us Genre.first.artists
end
