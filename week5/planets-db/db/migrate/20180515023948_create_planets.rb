class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.text :image
      t.float :orbit
      t.float :diameter
      t.float :mass
      t.float :temperature
      t.integer :moons

      t.timestamps
    end
  end
end
