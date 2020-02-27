json.extract! invitation, :id, :status, :created_at
json.familly do
  json.partial! 'api/v1/famillies/familly', familly: invitation.familly
end
