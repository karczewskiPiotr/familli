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

  describe 'enum' do
    it { is_expected.to define_enum_for(:status) }
  end
end
