class CreateDescriptions < ActiveRecord::Migration
  def change
    create_table :descriptions do |t|
      t.integer :risk_preference
      t.string :description

      t.timestamps null: false
    end
  end
end

