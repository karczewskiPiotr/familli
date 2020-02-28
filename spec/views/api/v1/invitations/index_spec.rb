require 'rails_helper'

RSpec.describe '/api/v1/invitations/index', type: :view do
  let!(:user) { create(:user) }
  let!(:user2) { create(:user) }

  before do
    familly = user.famillies.build(attributes_for(:familly))
    familly.save
    Invitation.create(user_id: user.id, familly_id: familly.id, status: :accepted)
    user.owner!
    Invitation.create(user_id: user2.id, familly_id: user.famillies.first.id)
  end
  
  describe 'correct response' do
    subject(:data) { JSON.parse(response)['data'] }
    
    context 'member' do
      before do
        sign_in(user2)
        @invitations = user2.invitations.includes(:user, :familly)
        render template: '/api/v1/invitations/index'
      end

      it { expect(data.length).to eq(user2.invitations.count) }
      
      it 'attributes' do
        data.each do |invitation|
          expect(invitation.keys).to match_array(%w[id status created_at familly])
          expect(invitation['familly'].keys).to match_array(%w[id subscription_fee renewal_date currency owner])
          expect(invitation['familly']['owner'].keys).to match_array(%w[id identity status email profile_image])
        end
      end
    end

    context 'owner' do
      before do
        sign_in(user)
        @invitations = []
        render template: '/api/v1/invitations/index'
      end

      it { expect(data.length).to eq 0 }
    end
  end
end
