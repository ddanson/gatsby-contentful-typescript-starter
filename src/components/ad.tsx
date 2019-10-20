import React from 'react'
import styled from '@emotion/styled'

interface AdProps {
  width: string
  height: string
}

const AdText = styled.span({
  display: 'block',
  fontSize: '14px',
  lineHeight: '14px',
  color: 'grey',
  textAlign: 'center',
  margin: 'auto',
})

function Ad(adProps: AdProps) {
  return (
    <div>
      <AdText style={{width: adProps.width}}>Advertisement</AdText>
        <div style={{width: adProps.width, height: adProps.height, margin: 'auto'}} />
    </div>
  )
}

export default Ad
