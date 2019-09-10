require 'rails_helper'

RSpec.describe Familly, type: :model do
  describe 'attributes' do
    subject(:familly) { described_class.new }

    it { expect(familly.attributes).to include('subscription_fee', 'renewal_date', 'currency') }
  end

  describe 'relations' do
    it { is_expected.to have_many(:invitations) }
    it { is_expected.to have_many(:members).through(:invitations) }
  end
end
