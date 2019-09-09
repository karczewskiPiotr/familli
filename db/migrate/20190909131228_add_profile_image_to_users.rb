class AddProfileImageToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :profile_image, :string, default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
  end
end
