FactoryBot.define do
  factory :familly do
    subscription_fee { Faker::Number.between(from: 10, to: 30) }
    renewal_date { Faker::Date.forward(days: 1) }
    currency { Faker::Currency.code }
  end
end
