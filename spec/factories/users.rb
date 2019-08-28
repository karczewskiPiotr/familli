FactoryBot.define do
  factory :user do
    identity { Faker::Name.name }
    email { Faker::Internet.email }
    password { Faker::Internet.password(6) }

    trait :parent do
      status { 1 }
    end
  end
end
