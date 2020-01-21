Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: 'users/omniauth_callbacks' }
  
  root to: 'pages#home'
  
  get '/app', to: 'pages#app'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
     get 'users/current', to: 'users#current'
     resources :famillies, only: :create do
      collection do
        get '/members', to: 'famillies#members'
      end
     end
     resources :invitations, only: :create
    end
  end
  
  match '/app/*path', to: 'pages#app', via: :all
end
