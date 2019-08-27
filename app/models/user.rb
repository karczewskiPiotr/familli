class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:spotify]

  def self.from_omniauth(auth)
    where(email: auth.info['email']).first_or_create do |user|
      user.email = auth.info['email']
      user.password = Devise.friendly_token[0, 20]
    end
  end
end
