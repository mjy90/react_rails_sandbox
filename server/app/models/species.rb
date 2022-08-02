class Species < ApplicationRecord
  has_many :variants
  has_many :traits, through: :variants
  has_many :price_reports, through: :variants
end
