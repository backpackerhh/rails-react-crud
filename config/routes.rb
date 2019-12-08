Rails.application.routes.draw do
  root 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'
  get 'bye_world', to: 'hello_world#index'

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :show, :update, :destroy]
    end
  end
end
