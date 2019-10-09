json.data do
  json.array! @members do |member|
    json.partial! 'api/v1/users/user', user: member
    json.invitation member.invitations.where(familly_id: current_user.familly.id).first.status
  end
end
