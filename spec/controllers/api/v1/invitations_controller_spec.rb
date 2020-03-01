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

  describe 'DELETE #destroy' do
    before do
      sign_in(user)
      user.famillies.create(attributes_for(:familly))
      Invitation.create(user_id: user.id, familly_id: user.famillies.first.id, status: :accepted)
      Invitation.create(user_id: user2.id, familly_id: user.famillies.first.id)
    end

    let(:valid_attributes) { { id: Invitation.last.id } }

    context 'with valid attributes' do
      subject(:api_call) { delete :destroy, params: valid_attributes }

      it { expect { api_call }.to change(Invitation, :count).by(-1) }
    end
  end

  describe 'PATCH #accept' do
    before do
      sign_in(user)
      user.famillies.create(attributes_for(:familly))
      Invitation.create(user_id: user.id, familly_id: user.famillies.first.id, status: :accepted)
      Invitation.create(user_id: user2.id, familly_id: user.famillies.first.id)
    end

    let(:valid_attributes) { { id: user2.invitations.last.id } }

    context 'with valid attributes' do
      subject(:api_call) { patch :accept, params: valid_attributes }

      it 'changes invitation status to accepted' do
        api_call
        expect(user2.invitations.last.status).to eq 'accepted'
      end
    end
  end

  describe 'PATCH #decline' do
    before do
      sign_in(user)
      user.famillies.create(attributes_for(:familly))
      Invitation.create(user_id: user.id, familly_id: user.famillies.first.id, status: :accepted)
      Invitation.create(user_id: user2.id, familly_id: user.famillies.first.id)
    end

    let(:valid_attributes) { { id: user2.invitations.last.id } }

    context 'with valid attributes' do
      subject(:api_call) { patch :decline, params: valid_attributes }

      it { expect { api_call }.to change(Invitation, :count).by(-1) }
    end
  end

  describe 'GET #index' do
    subject(:api_call) { get :index, format: :json }

    let!(:user) { create(:user) }
    let!(:user2) { create(:user) }

    before do
      familly = user.famillies.build(attributes_for(:familly))
      familly.save
      Invitation.create(user_id: user.id, familly_id: familly.id, status: :accepted)
      user.owner!
      Invitation.create(user_id: user2.id, familly_id: user.famillies.first.id)
      sign_in(user2)
    end

    it 'returns success status' do
      api_call
      expect(response).to be_successful
    end
  end
end
