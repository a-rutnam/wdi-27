class Fruit < ApplicationRecord

  belongs_to :shelf, optional: true

  validates :name, presence: true

  def squishy?
    false
  end

  def ripe?
    "add code here to test ripeness"
    puts "testing ripeness!"
    true
  end


end
