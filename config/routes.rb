Rails.application.routes.draw do

  # Home
  root to: 'home#index'
  get 'about', to: 'home#about'
  get 'flash', to: 'home#flashtest'

  # Users
  get 'users/new'
  get 'signup', to: 'users#new'
  post 'signup',  to: 'users#create'
  resources :users

  # Sessions
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  # Lists & Tasks
  get 'tasks', to: 'tasks#index', as: 'tasks'

  resources :lists do
    resources :tasks, shallow: true, :except => [:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
