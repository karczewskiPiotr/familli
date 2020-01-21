require 'rails_helper'

RSpec.describe '/api/v1/users/available', type: :view do
  let!(:members) { create_list(:user, 4) }
  let!(:current_user) { create(:user) }

  before do
    sign_in(current_user)
    @users = User.not_member_of_familly
    render template: '/api/v1/users/available'
  end

  describe 'correct response' do
    subject(:data) { JSON.parse(response)['data'] }

    it { expect(data.length).to eq(5) }

    it 'attributes' do 
      data.each do |user|
        expect(user.keys).to match_array(%w[id identity email status profile_image])
      end
    end
  end
end