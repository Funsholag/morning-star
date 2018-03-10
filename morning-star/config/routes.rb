Rails.application.routes.draw do
  devise_for :users
  get '/' => "home#index"
  root :to => "home#index"

  get '/sermon' => "sermon#index"
  get '/member' => "member#index"
  get '/project' => "project#index"

  get '/about' => "about#index"
  get '/about/history' => "about#history"
  get '/about/mission' => "about#mission"
  get '/about/staff' => "about#staff"
  get '/event' => "event#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
