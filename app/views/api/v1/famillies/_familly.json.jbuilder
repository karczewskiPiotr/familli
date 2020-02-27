json.extract! familly, :id, :subscription_fee, :renewal_date, :currency
json.owner do
  json.partial! 'api/v1/users/user', user: familly.members.where(status: :owner).first
end
