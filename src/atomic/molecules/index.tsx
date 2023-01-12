import React from 'react'
import { Box, Image } from 'native-base'
import { ImageBackground } from 'react-native'
import slider from '../../img/slider.png'
import bike from '../../img/bike.png'

export function MainBanner() {
  return (
    <Box w="100%" h="300" mt="20px">
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="contain"
        source={slider}
      >
        <Image source={bike} alt="image of a bike" />
      </ImageBackground>
    </Box>
  )
}
