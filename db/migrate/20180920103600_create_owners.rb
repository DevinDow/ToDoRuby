class CreateOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :owners do |t|
      t.references :user, foreign_key: true
      t.references :list, foreign_key: true
      t.string :my_list_name

      t.timestamps
    end
    add_index :owners, [:user_id, :list_id], unique: true
  end
end
