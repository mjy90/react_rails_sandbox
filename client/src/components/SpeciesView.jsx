import { useQuery } from 'react-query'
import { Link, useParams } from "react-router-dom"
import {
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

export default function SpeciesView(props) {
  const { isEditing } = props
  const { speciesId } = useParams()

  const { isLoading, error, data: species } = useQuery(['species', speciesId], async () => {
    let res = await fetch(`http://localhost:5000/species/${speciesId}`)
    return res.json()
  })

  if (isLoading) return <p>Loading...</p>

  if (error) {
    console.error(error)
    return <p>Error: {error.message}</p>
  }

  const TextComponent = isEditing ? <TextField defaultValue={species.description} /> : Typography

  return (
    <Grid container spacing={2} padding={2} alignItems='stretch'>
      <Grid item xs={12}>
        <TextComponent variant='h4'>{species.name}</TextComponent>
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Typography variant='h6'>Description:</Typography>
      </Grid>
      <Grid item xs={12} md={9} lg={10}>
        <TextComponent>{species.description}</TextComponent>
      </Grid>
      <Grid item xs={12}>
        { isEditing ? (
            <Link to={`/species/${species.id}`} style={{ display: 'block', textDecoration: 'none' }}>
              <Button color='success'>
                Save
              </Button>
            </Link>
          ) : (
            <Link to={`/species/${species.id}/edit`} style={{ display: 'block', textDecoration: 'none' }}>
              <Button color='primary'>
                Edit
              </Button>
            </Link>
          )
        }
      </Grid>
    </Grid>
  )
}
