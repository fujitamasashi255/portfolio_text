Rails.application.routes.draw do
  namespace :questions do
    resources :pictures, only: %i[ edit update destroy ]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'questions#new'
  resources :questions do
    get :tex_log, on: :member
    post :compile, on: :member
  end
end
