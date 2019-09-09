class Api::V1::UsersController < ApiController
  def current
    @user = current_user
  end
end
