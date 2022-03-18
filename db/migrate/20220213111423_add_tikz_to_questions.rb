class AddTikzToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :tikz, :text
  end
end
