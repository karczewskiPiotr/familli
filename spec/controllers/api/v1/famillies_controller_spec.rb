require 'rails_helper'

RSpec.describe Api::V1::FamilliesController, type: :controller do
  let!(:user) { create(:user) }

  describe 'POST #create' do
    let(:valid_attributes) { { familly: attributes_for(:familly) } }
    let(:invalid_attributes) { { familly: attributes_for(:familly, subscription_fee: nil) } }

    before { sign_in(user) }

    context 'with valid attributes' do
      subject(:api_call) { post :create, params: valid_attributes }

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
end
