require 'rails_helper'

RSpec.describe "Questions", type: :system do
  before do
    driven_by :selenium_chrome_headless
  end

  describe 'question新規作成機能' do
    before do
      visit new_question_path
    end

    context 'contentが入力されていないとき' do
      it '問題が作成されない' do
        click_button 'Create Question'
        expect(page).to have_content 'いいい'
      end
    end
  end
end
