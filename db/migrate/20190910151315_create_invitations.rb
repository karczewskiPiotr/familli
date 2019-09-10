class CreateInvitations < ActiveRecord::Migration[6.0]
  def change
    create_table :invitations do |t|
      t.integer :user_id, index: true
      t.integer :familly_id, index: true
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
