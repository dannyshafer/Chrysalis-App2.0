class CreateBaskets < ActiveRecord::Migration
  def change
    create_table :baskets do |t|
      t.integer :user_id
      t.string :name
      t.date :date
      t.timestamps null: false
    end
  end
end
