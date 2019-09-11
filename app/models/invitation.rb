class Invitation < ApplicationRecord
  belongs_to :familly
  belongs_to :user

  enum status: %i[pending accepted declined]
end
