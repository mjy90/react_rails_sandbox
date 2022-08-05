import { useQuery } from 'react-query'
import {
  Grid,
  // Item,
} from '@mui/material'

import SpeciesCard from './SpeciesCard'

export default function SpeciesList(props) {
  const { isLoading, error, data } = useQuery(['speciesList'], async () => {
    let res = await fetch('http://localhost:5000/species')
    return res.json()
  })

  if (isLoading) return <p>Loading...</p>
  if (error) {
    console.error(error)
    return <p>Error: {error.message}</p>
  }

  return (
    <Grid container spacing={2} padding={2} alignItems='stretch'>
      {data.map((species) => (
        <Grid item xs={12} md={6} lg={4} key={species.id}>
          <SpeciesCard species={species} />
        </Grid>
      ))}
    </Grid>
  )
}
