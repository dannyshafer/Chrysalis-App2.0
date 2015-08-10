class CreateStocksBaskets < ActiveRecord::Migration
  def change
    create_table :stocks_baskets do |t|
      t.integer :stock_id
      t.integer :basket_id
      
      t.timestamps null: false
    end
  end
end
