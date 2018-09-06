Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  get 'tasks', to: 'tasks#all', as: 'tasks'

  resources :lists do
    resources :tasks, shallow: true, :except => [:index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
