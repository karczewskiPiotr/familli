require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'attributes' do
    subject(:user) { described_class.new }

    it { expect(user.attributes).to include('identity', 'email', 'status', 'profile_image') }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:identity) }
  end

  describe 'relations' do
    it { is_expected.to have_many(:invitations) }
    it { is_expected.to have_many(:famillies).through(:invitations) }
  end

  describe 'enum' do
    it { is_expected.to define_enum_for(:status) }
  end

  describe 'methods' do
    let(:invitation) { create(:invitation) }

    before { invitation.accepted! }

    it 'should return accepted familly' do
      expect(invitation.user.familly).to eq(invitation.familly)
    end
  end
end
