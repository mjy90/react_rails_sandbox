import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material'

export default function SpeciesCard(props) {
  const { species } = props
  return (
    <Card elevation={5}>
      <CardHeader title={species.name} />
      <CardContent>
        <p>
          <strong>Description:</strong> {species.description}
        </p>
      </CardContent>
      <CardActions>
        <Link to={`/species/${species.id}`} style={{ display: 'block', textDecoration: 'none' }}>
          <Button color='primary'>
            View
          </Button>
        </Link>
        <Link to={`/species/${species.id}/edit`} style={{ display: 'block', textDecoration: 'none' }}>
          <Button color='primary'>
            Edit
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
