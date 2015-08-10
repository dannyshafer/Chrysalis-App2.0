class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.string :name
      t.string :industry
      t.float :eps
      t.float :pe
      t.float :pbook
      t.float :psales
      t.float :markcap
      t.float :ask
      t.float :bid
      t.float :peg
      t.float :graham_number
      t.float :shares
      t.float :book_value
      t.float :eps_v_ind
      t.float :pe_v_ind
      t.float :pbook_v_ind
      t.float :psales_v_ind
      t.float :markcap_v_ind
      t.float :peg_v_ind
      t.float :graham_number_v_ind
      t.float :shares_v_ind
      t.float :book_value_v_ind

      t.timestamps null: false
    end
  end
end
