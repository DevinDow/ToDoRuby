Rails.application.routes.draw do
  root to: 'home#index'

  get 'tasks', to: 'tasks#index', as: 'tasks'

  resources :lists do
    resources :tasks, shallow: true, :except => [:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
