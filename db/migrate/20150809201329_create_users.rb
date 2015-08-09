class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :uid, null: false
      t.string :handle, null: false
      t.integer :risk_preference
      t.integer :age

      t.timestamps null: false
    end
    add_index :users, :uid
  end
end
