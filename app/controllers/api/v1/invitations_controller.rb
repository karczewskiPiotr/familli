class Api::V1::InvitationsController < ApiController
  def create
    invitation = Invitation.new(invitation_params)
    return unless invitation.save
  end

  def destroy
    invitation = Invitation.find(params[:id])
    invitation.destroy
  end

  def index
    @invitations = current_user.owner? ? [] : current_user.invitations.includes(:user, :familly)
  end

  private

  def invitation_params
    params.require(:invitation).permit(:id, :user_id, :familly_id, :status)
  end
end
