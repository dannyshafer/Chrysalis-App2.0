class CreateIndustries < ActiveRecord::Migration
  def change
    create_table :industries do |t|
      t.string :name
      t.float :eps
      t.float :pe
      t.float :pbook
      t.float :psales
      t.float :markcap
      t.float :peg
      t.float :book_value
      t.float :shares
      t.float :graham_number

      t.timestamps null: false
    end
  end
end
