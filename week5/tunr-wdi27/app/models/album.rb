class Album < ApplicationRecord
  # gives us Album.first.songs
  # (via table songs.album_id)
  has_many :songs

  has_many :artists, through: :songs  # gives us  Album.first.artists

  def artist
    artists.uniq.first   # this is applied to the current object, i.e self.artists.uniq.first
  end

end
