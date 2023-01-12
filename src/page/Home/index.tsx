import { Box } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { DetailBackground } from '../../atomic/atoms/DetailBackground'
import { MainBanner } from '../../atomic/molecules'

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Box flex="1" padding="20px" pt="10px" position="relative">
      <DetailBackground />
      <MainBanner />
    </Box>
  )
}

export default Home
