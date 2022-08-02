class CreatePriceReports < ActiveRecord::Migration[7.0]
  def change
    create_table :price_reports do |t|
      t.references :variant, null: false, foreign_key: true

      t.decimal :price, precision: 10, scale: 2
      t.string :currency, default: 'USD'
      t.string :source
      t.string :url
      t.string :image_url
      t.string :image_thumbnail_url
      t.datetime :priced_at
      t.boolean :is_active, default: true
      t.boolean :is_sale, default: false

      t.timestamps
    end
  end
end
