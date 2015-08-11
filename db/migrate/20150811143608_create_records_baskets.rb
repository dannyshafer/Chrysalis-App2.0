class CreateRecordsBaskets < ActiveRecord::Migration
  def change
    create_table :records_baskets do |t|
      t.integer :record_id
      t.integer :basket_id

      t.timestamps null: false
    end
  end
end
