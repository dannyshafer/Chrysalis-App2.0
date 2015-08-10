class CreateDefinitions < ActiveRecord::Migration
  def change
    create_table :definitions do |t|
      t.string :term
      t.string :explanation

      t.timestamps null: false
    end
  end
end

