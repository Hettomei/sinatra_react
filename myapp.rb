require 'sinatra'
require "sinatra/json"

list = [
  {"author": "Pete Hunt", "text": "This is one comment"},
  {"author": "Jordan Walke", "text": "This is *another* comment"},
  {"author": "plop", "text": "Yeeeeeeeaaaaaaaaaaaaaaaaaahhhhhhh"}
]

get '/' do
  send_file './public/index.html'
end

get '/comments' do
  json list
end

post '/comments' do
  list << {"author": params['author'], "text": params['text']}
  json list
end
