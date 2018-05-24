class Dog < ApplicationRecord

  geocoded_by :address
  after_validation :geocode  # lookup the address and store its GPS coordinates (on create)

end
