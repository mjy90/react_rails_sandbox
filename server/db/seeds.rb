# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

species = Species.create([
  { name: 'Maple', description: 'A very hard wood, native to Canada and the northeastern United States.' },
  { name: 'Oak', description: 'A hardwood, native to North America and Europe.' },
  { name: 'Padauk', description: 'An exotic hardwood, native to Africa.' },
  { name: 'Pine', description: 'A softwood, native to North America.' },
  { name: 'Walnut', description: 'Native to New England and greatly sought-after for furnituremaking.' },
])
