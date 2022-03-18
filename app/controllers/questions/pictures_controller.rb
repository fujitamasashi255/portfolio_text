class Questions::PicturesController < ApplicationController
  before_action :set_question, only: %i[edit update destroy show]

  def edit; end

  def update
    @question.update(question_params)
    redirect_to question_path(@question)
  end

  def destroy
  end

  private

  def question_params
    params.require(:question).permit(:picture)
  end

  def set_question
      @question = Question.find(params[:id])
  end
end
