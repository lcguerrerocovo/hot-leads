require 'json'

puts "userId,timestamp,accountId,propertyId,business,salePrice,rentPrice"
ARGF.each do |event|
  e = JSON.parse(event)
  a = e['event']['attributes']
  puts "#{a['userId']},#{e['ct']},#{a['accountId']},#{a['propertyId']},#{a['business']},#{a['salePrice']},#{a['rentPrice']}"
end
