require 'rails_helper'

RSpec.describe '/api/v1/famillies/members', type: :view do
  let!(:members) { create_list(:user, 3) }
  let!(:user) { create(:user, :parent) }

  before do
    sign_in(user)
    @members = members
    render template: '/api/v1/famillies/members'
  end

  describe 'correct response' do
    subject(:data) { JSON.parse(response)['data'] }

    it { expect(data.length).to eq(3) }
    it 'attributes' do
      data.each do |member|
        expect(member.keys).to match_array(%w[identity email status profile_image])
      end
    end
  end
end
