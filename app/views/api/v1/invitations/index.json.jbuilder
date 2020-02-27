json.data do
  json.array! @invitations do |invitation|
    json.partial! 'api/v1/invitations/invitation', invitation: invitation
  end
end
