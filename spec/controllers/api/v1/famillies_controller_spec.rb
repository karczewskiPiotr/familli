require 'rails_helper'

RSpec.describe Api::V1::FamilliesController, type: :controller do
  let!(:user) { create(:user) }

  describe 'POST #create' do
    let(:valid_attributes) { { familly: attributes_for(:familly) } }
    let(:invalid_attributes) { { familly: attributes_for(:familly, subscription_fee: nil) } }

    before { sign_in(user) }

    context 'with valid attributes' do
      subject(:api_call) { post :create, params: valid_attributes }

      it 'returns success status' do
        api_call
        expect(response).to be_successful
      end

      it { expect { api_call }.to change(Familly, :count).by(1) }

      it 'makes user owner of the created familly' do
        api_call
        expect(user.reload.owner?).to eq(true)
      end

      it 'makes invite to the familly accepted' do
        api_call
        expect(user.reload.familly).to eq(assigns(:familly))
      end
    end
  end

  describe 'GET #members' do
    subject(:api_call) { get :members, format: :json }

    let!(:members) { create_list(:user, 3) }
    let!(:user) { create(:user, :parent) }

    before do
      sign_in(user)
      familly = user.famillies.build(attributes_for(:familly))
      familly.save
      Invitation.create(user_id: user.id, familly_id: familly.id, status: :accepted)
      user.owner!
      @members = members.each do |member|
        member.invitations.build(familly_id: familly.id).save
      end
    end

    it 'returns success status' do
      api_call
      expect(response).to be_successful
    end
  end
end
