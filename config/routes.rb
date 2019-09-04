Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: 'pages#home'
  get '/app', to: 'pages#app'
  match '/app/*path', to: 'pages#app', via: :all
end
