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
    @invitations = current_user.owner? ? [] : current_user.invitations.where(status: :pending).includes(:user, :familly)
  end

  def accept
    invitation = Invitation.find(params[:id])
    invitation&.accepted!
    Invitation.where(user_id: current_user.id).where.not(id: params[:id]).destroy_all
  end

  def decline
    invitation = Invitation.find(params[:id])
    invitation&.declined!
    invitation.destroy
  end

  private

  def invitation_params
    params.require(:invitation).permit(:id, :user_id, :familly_id, :status)
  end
end
