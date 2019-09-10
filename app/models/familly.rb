class Familly < ApplicationRecord
  has_many :invitations
  has_many :members, through: :invitations, source: :user
end
