class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:spotify]

  has_many :invitations
  has_many :famillies, through: :invitations

  validates :identity, presence: true

  enum status: %i[member owner]

  scope :has_no_invitations, -> { left_outer_joins(:invitations).where(invitations: { id: nil }) }
  scope :has_no_accepted_invitations, -> { left_outer_joins(:invitations).where(invitations: { status: :pending }) }
  scope :not_member_of_familly, -> { has_no_invitations.or(has_no_accepted_invitations) }

  def familly
    Invitation.where(status: :accepted, user_id: id).first&.familly
  end

  # :nocov:
  def self.from_omniauth(auth)
    where(email: auth.info['email']).first_or_create do |user|
      user.email = auth.info['email']
      user.password = Devise.friendly_token[0, 20]
      user.identity = auth.info['display_name']
      user.profile_image = auth.info['images'].last['url']
    end
  end
  # :nocov:
end
