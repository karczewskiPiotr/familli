json.data do
  json.partial! 'api/v1/users/user', user: @user
  json.familly @user.familly
end
