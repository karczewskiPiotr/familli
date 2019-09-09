class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:spotify]

  validates :identity, presence: true

  enum status: %i[member owner]

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
