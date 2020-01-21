require 'rails_helper'

RSpec.describe '/api/v1/famillies/members', type: :view do
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
    render template: '/api/v1/famillies/members'
  end

  describe 'correct response' do
    subject(:data) { JSON.parse(response)['data'] }

    it { expect(data.length).to eq(3) }

    it 'attributes' do
      data.each do |member|
        expect(member.keys).to match_array(%w[id identity email status profile_image invitation])
      end
    end
  end
end
