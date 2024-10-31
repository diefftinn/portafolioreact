import React from 'react'
import { Header } from '../../Layout/Header/Header'
import { Section } from '../../Layout/Section/section'
import { IntroProfile } from '../../Layout/IntroProfile/IntroProfile'
import { Section2 } from '../../Layout/Section2/Section2'

export const Home = () => {
return (
<>
<Header />
<Section styleSection='section-profile'>
<IntroProfile />
</Section>
<Section styleSection='section-js'>
<Section2 />
</Section>
<Section>
  <h1>esta es la version resumida para  que la observe </h1>
</Section>
</>
  )
}
