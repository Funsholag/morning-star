Rails.application.routes.draw do
  devise_for :users
  get '/' => "home#index"
  root :to => "home#index"

  get '/about' => "about#index"
  get '/about/history' => "about#history"
  get '/event' => "event#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
