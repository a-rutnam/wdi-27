class Artist < ApplicationRecord
  has_many :works

  # the name field cannot be empty, and must be at least three characters long
  validates :name, presence: true, length: { minimum: 3 }
end
