require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  let(:user) { create(:user) }

  before do
    request.env['HTTP_ACCEPT'] = 'application/json'
  end

  describe 'GET #current' do
    before do
      sign_in(user)
      get :current
    end

    describe 'successful response' do
      it { expect(response).to be_successful }
    end
  end
end
