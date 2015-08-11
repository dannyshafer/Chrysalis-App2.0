class CreateRecordsBaskets < ActiveRecord::Migration
  def change
    create_table :records_baskets do |t|
      t.integer :record
      t.integer :basket

      t.timestamps null: false
    end
  end
end
