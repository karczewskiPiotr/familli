require 'rails_helper'

RSpec.describe '/api/v1/users/current', type: :view do
  let!(:user) { create(:user) }

  before do
    sign_in(user)
    @user = user
    render template: '/api/v1/users/current'
  end

  describe 'correct response attributes' do
    subject(:data) { JSON.parse(response)['data'] }

    it { expect(data.keys).to match_array(%w[id identity email status profile_image familly]) }
    it { expect(data['id']).to eq(user.id) }
    it { expect(data['identity']).to eq(user.identity) }
    it { expect(data['email']).to eq(user.email) }
    it { expect(data['status']).to eq(user.status) }
    it { expect(data['profile_image']).to eq(user.profile_image) }
    it { expect(data['familly']).to eq(user.familly) }
  end
end
