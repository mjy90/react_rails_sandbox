import {
  useState,
  useEffect,
} from 'react'

import {
  // Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  // Select,
} from '@mui/material'

function BoardFootCalculator(props) {
  const [width, setWidth] = useState(0)
  const [length, setLength] = useState(0)
  const [thickness, setThickness] = useState(0)
  const [boardFeet, setBoardFeet] = useState('boardFeet')
  // const [boardFeetPrice, setBoardFeetPrice] = useState('boardFeetPrice')

  useEffect(function updateBoardFeet() {
    setBoardFeet(width * length * thickness)
  }, [width, length, thickness])

  return (
    <Card>
      <CardHeader title="Board Feet Calculator" />
      <CardContent>
        <p>
          This calculator allows you to enter the dimensions of a board to figure out how many board-feet it contains.
        </p>
        <TextField label="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
        <TextField label="Length" value={length} onChange={(e) => setLength(e.target.value)} />
        <TextField label="Thickness" value={thickness} onChange={(e) => setThickness(e.target.value)} />

        <p>
          <strong>Board Feet:</strong> {boardFeet}
        </p>
      </CardContent>
    </Card>
  )
}

export default BoardFootCalculator
