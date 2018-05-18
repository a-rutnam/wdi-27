class User < ApplicationRecord
  has_many :mixtapes   # gives us User.first.mixtapes

  has_secure_password  #  encrypts passwords on the fly, to store in password_digest
  validates :email, presence: true, uniqueness: true
end
