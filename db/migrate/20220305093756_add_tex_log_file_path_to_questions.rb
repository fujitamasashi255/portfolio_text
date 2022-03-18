class AddTexLogFilePathToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :tex_log_path, :string
  end
end
