class Api::V1::FamilliesController < ApiController
  def create
    @familly = current_user.famillies.build(familly_params)
    if @familly.save
      Invitation.create(user_id: current_user.id, familly_id: @familly.id, status: :accepted)
      current_user.owner!
    end
  end

  private

  def familly_params
    params.require(:familly).permit(:id, :subscription_fee, :currency, :renewal_date)
  end
end