require 'rails_helper'

RSpec.describe Api::V1::InvitationsController, type: :controller do
  let!(:user) { create(:user) }
  let!(:user2) { create(:user) }

  describe 'POST #create' do
    before do
      sign_in(user)
      user.famillies.create(attributes_for(:familly))
      Invitation.create(user_id: user.id, familly_id: user.famillies.first.id, status: :accepted)
    end

    let(:valid_attributes) { { invitation: { user_id: user2.id, familly_id: user.familly.id } } }

    context 'with valid attributes' do
      subject(:api_call) { post :create, params: valid_attributes }

      it { expect { api_call }.to change(Invitation, :count).by(1) }

      it 'makes invitation status pending' do
        api_call
        expect(Invitation.last.status).to eq('pending')
      end
    end
  end
end
