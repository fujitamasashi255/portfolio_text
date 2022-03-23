class Question < ApplicationRecord
    has_rich_text :content
    has_one_attached :answer_file
    has_one_attached :tikz_pdf

    validates :content, presence: true
end
