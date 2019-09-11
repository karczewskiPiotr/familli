class Familly < ApplicationRecord
  has_many :invitations
  has_many :members, through: :invitations, source: :user

  validates :subscription_fee, presence: true
  validates :renewal_date, presence: true
  validates :currency, presence: true
end
