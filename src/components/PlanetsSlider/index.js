import './index.css'

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="app-container" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
