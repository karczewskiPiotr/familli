class CreateFamillies < ActiveRecord::Migration[6.0]
  def change
    create_table :famillies do |t|
      t.float :subscription_fee
      t.date :renewal_date
      t.string :currency

      t.timestamps
    end
  end
end
