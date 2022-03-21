class QuestionsController < ApplicationController
    before_action :set_question, only: %i[edit update destroy show compile tex_log]

dddddddd




    def new
        @question = Question.new()
        @question.update(tikz:"\\documentclass{jsarticle}\n%\\usepackage{amsmath}\n%\\usepackage{tikz}\n\n\\begin{document}\n\n\\end{document}")
    end

    def create
        @question = Question.new(question_params)
        @question.save
        redirect_to question_path(@question)
    end

    def edit;end

    def update
        @question.update(question_params)
        redirect_to question_path(@question)
    end

    def show; end

    def destroy
        @question.destroy
        redirect_to new_question_path
    end

    def print
        @question = Question.find(70);
        render formats: [:pdf]
    end

    def compile
        @question.update(question_params)
        begin
            binding.pry
            output = LatexToPdf.generate_pdf(@question.tikz, LatexToPdf.config)
            #render_to_string(:template => "/questions/print.pdf.erb", :layout => true)
            #file_path = "#{Rails.root}/tmp/test_#{@question.id}.pdf"
            file_path = "#{Rails.root}/app/assets/images/test_#{@question.id}.pdf"
            File.open(file_path, "w+") do |f|
                f.write(output)
            end
            @question.tikz_pdf.attach(io: File.open(file_path), filename: "test_#{@question.id}.pdf")
        rescue => @e
            @question.update(tex_log_path: @e.message.scan(/\/.*\.log/).first)
            @question.tikz_pdf.purge
        end
    end

    def tex_log
        #type: 'text/plain'がないとうまくいかない！！！！！！！
        send_file @question.tex_log_path, type: 'text/plain', disposition: :inline
    end

    private

    def question_params
      params.require(:question).permit(:content, :answer_file, :picture, :tikz, :tex_log_path)
    end

    def set_question
        @question = Question.find(params[:id])
    end
end
