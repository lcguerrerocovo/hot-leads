require 'rubygems'
require 'json'
require 'active_support'
require 'rsolr'
require 'net/http'

class GeoFetcher 
  def initialize
    @solr = RSolr.connect :url => "http://host:8983/solr/inmuebles"
  end

  def fetch(id)
    @solr.get('select', :params => { 
      :q => "id:#{id}",
      :fl => "coordenadas_0_coordinate,coordenadas_1_coordinate",
    })['response']['docs'][0]
  end
end
g = GeoFetcher.new

ARGF.each do |lead|
  listing_id = lead.split(';')[3]
  geo = g.fetch(listing_id)
  unless geo.nil? or geo['coordenadas_0_coordinate'] == 0
    puts "#{lead.gsub("\n", '')};#{geo['coordenadas_0_coordinate']};#{geo['coordenadas_1_coordinate']}"
  end 
end
