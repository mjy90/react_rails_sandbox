class SpeciesController < ApplicationController
  def index
    render json: Species.all
  end

  def show
    render json: Species.find(params[:id])
  end

  def create
    species = Species.create(species_params)

    render json: species
  end

  def update
    species = Species.get(species_params[:id])
    species.update(species_params.except(:id))

    render json: species
  end

  def destroy
    species = Species.get(species_params[:id])
    species.destroy

    render json: species
  end

  def species_params
    params.permit(:id, :name, :description)
  end
end
