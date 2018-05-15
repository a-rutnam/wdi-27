class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.text :name         # like SQL:   name TEXT,
      t.text :species
      t.text :description
      t.text :image_url
      t.integer :age
      t.integer :roundness
      t.boolean :alive

      t.timestamps   # gives you 'created_at' and 'updated_at' timestamp fields
    end
  end
end
