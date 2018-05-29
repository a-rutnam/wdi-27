class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.text :name
      t.text :roundness
      t.integer :age

      t.timestamps
    end
  end
end
