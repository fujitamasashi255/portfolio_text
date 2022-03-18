class AddPictureToQuestion < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :picture, :text
  end
end
