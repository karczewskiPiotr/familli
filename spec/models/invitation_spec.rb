require 'rails_helper'

RSpec.describe Invitation, type: :model do
  describe 'relations' do
    it { is_expected.to belong_to(:familly) }
    it { is_expected.to belong_to(:user) }
  end

  describe 'enum' do
    it { is_expected.to define_enum_for(:status) }
  end
  
end
