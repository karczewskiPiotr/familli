require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:user) { create(:user) }

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

  describe 'GET #available' do
    let!(:members) { create_list(:user, 3) }

    before do
      sign_in(user)
      familly = user.famillies.build(attributes_for(:familly))
      familly.save
      Invitation.create(user_id: user.id, familly_id: familly.id, status: :accepted)
      user.owner!
      @members = members.each do |member|
        member.invitations.build(familly_id: familly.id).save
      end
      get :available
    end

    describe 'successful response' do
      it { expect(response).to be_successful }
    end
  end
end
