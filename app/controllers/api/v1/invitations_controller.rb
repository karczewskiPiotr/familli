class Api::V1::InvitationsController < ApiController
  def create
    invitation = Invitation.new(invitation_params)
    return unless invitation.save
  end

  private

  def invitation_params
    params.require(:invitation).permit(:id, :user_id, :familly_id, :status)
  end
end
