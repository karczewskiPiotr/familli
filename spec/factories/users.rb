FactoryBot.define do
  factory :user do
    identity { Faker::Name.name }
    email { Faker::Internet.email }
    password { Faker::Internet.password(min_length: 6, max_length: 15) }

    trait :parent do
      status { 1 }
    end
  end
end
