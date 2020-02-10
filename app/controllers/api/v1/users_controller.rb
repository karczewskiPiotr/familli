class Api::V1::UsersController < ApiController
  def current
    @user = current_user
  end

  def available
    @users = User.not_member_of_familly(current_user.familly.id)
  end
end
