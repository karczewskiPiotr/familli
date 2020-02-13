# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {
    identity: 'Kacper Gryszkiewicz',
    email: 'gryszkiewicz@gmail.com',
    password: 'gryszkiewicz'
  },
  {
    identity: 'Agata Banaszkiewicz',
    email: 'banaszkiewicz@gmail.com',
    password: 'banaszkiewicz'
  },
  {
    identity: 'Pati Piątek',
    email: 'piatek@gmail.com',
    password: 'piatek'
  },
  {
    identity: 'Zuza Sułkowska',
    email: 'sulkowska@gmail.com',
    password: 'sulkowska'
  },
  {
    identity: 'Wika Pawlik',
    email: 'pawlik@gmail.com',
    password: 'pawlik'
  }
])