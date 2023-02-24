import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleCard } from '../src'

export default {
  title: 'ArticleCard',
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
)

//👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  imgSrc:
    'https://img.okezone.com/content/2021/09/07/51/2467419/perubahan-nasib-eder-dari-jadi-pahlawan-hingga-cuma-bertugas-bawa-trofi-di-piala-eropa-2020-tncyKrPCFz.jpg',
  imgAlt: "Image can't be load",
  imgErrorSrc: '',
  title:
    'FASHION & LIFESTYLE',
  description: 'Mau Punya Tas Brand Lokal Yang Keren? Cek 5 Produk Ceviro',
  isLoading: true,
}
