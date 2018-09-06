Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'

  resources :lists do
    resources :tasks, shallow: true
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
