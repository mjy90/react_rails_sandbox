# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_02_154422) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "price_reports", force: :cascade do |t|
    t.bigint "variant_id", null: false
    t.decimal "price", precision: 10, scale: 2
    t.string "currency", default: "USD"
    t.string "source"
    t.string "url"
    t.string "image_url"
    t.string "image_thumbnail_url"
    t.datetime "priced_at"
    t.boolean "is_active", default: true
    t.boolean "is_sale", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["variant_id"], name: "index_price_reports_on_variant_id"
  end

  create_table "species", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "traits", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "variant_traits", force: :cascade do |t|
    t.bigint "variant_id", null: false
    t.bigint "trait_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trait_id"], name: "index_variant_traits_on_trait_id"
    t.index ["variant_id"], name: "index_variant_traits_on_variant_id"
  end

  create_table "variants", force: :cascade do |t|
    t.bigint "species_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["species_id"], name: "index_variants_on_species_id"
  end

  add_foreign_key "price_reports", "variants"
  add_foreign_key "variant_traits", "traits"
  add_foreign_key "variant_traits", "variants"
  add_foreign_key "variants", "species"
end
