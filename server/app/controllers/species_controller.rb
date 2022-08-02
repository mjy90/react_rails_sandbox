class SpeciesController < ApplicationController
  def index
    render json: Species.all
  end
end
