class Invitation < ApplicationRecord
  belongs_to :familly, optional: true
  belongs_to :user, optional: true

  enum status: %i[pending accepted declined]
end
