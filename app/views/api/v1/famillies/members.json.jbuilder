json.data do
  json.array! @members do |member|
    json.partial! 'api/v1/users/user', user: member
  end
end
