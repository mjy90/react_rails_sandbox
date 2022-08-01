import { useEffect, useState } from 'react'
import { SvgIcon } from '@mui/material'

export default function MaterialIcon(props) {
  let { children, ...rest } = props
  let [iconPath, setIconPath] = useState('')

  useEffect(() => {
    if (typeof children === 'string') {
      let initCapChild = children.charAt(0).toUpperCase() + children.slice(1)
      setIconPath(require('@mdi/js')[`mdi${initCapChild}`])
      console.log(initCapChild)
    }
  }, [children])

  return (
    <SvgIcon {...rest}>
      <path d={iconPath} />
    </SvgIcon>
  )
}
