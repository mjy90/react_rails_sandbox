class CreateVariantTraits < ActiveRecord::Migration[7.0]
  def change
    create_table :variant_traits do |t|
      t.references :variant, null: false, foreign_key: true
      t.references :trait, null: false, foreign_key: true

      t.timestamps
    end
  end
end
