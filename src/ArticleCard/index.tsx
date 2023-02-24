import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Constants from '../constants'

export declare interface ArticleCardProps {
  imgSrc: string
  imgAlt?: string
  imgErrorSrc?: string
  title: string
  description: string
  isLoading: boolean
}

export const ArticleCard = (
  props: ArticleCardProps & React.ComponentPropsWithoutRef<'li'>,
) => {
  const { imgSrc, title, description, imgAlt, imgErrorSrc, isLoading } = props

  return (
    <li className="tw-list-none">
      <div className="tw-h-[108px] tw-w-full tw-gap-3">
        <LazyLoadImage
          src={imgSrc}
          alt={imgAlt}
          placeholderSrc={Constants.LAZY_LOAD_IMAGE_PLACEHOLDER}
          wrapperProps={{
            className:
              'tw-rounded-lg tw-h-[173px] tw-w-[252px] tw-object-cover tw-object-center',
            style: {
              display: 'flex',
            },
          }}
          className="tw-h-[173px] tw-w-[252px] tw-rounded-lg tw-object-cover tw-object-center"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = !imgErrorSrc
              ? Constants.ERROR_IMAGE_SQUARE
              : imgErrorSrc
          }}
        />
        <div className="tw-flex tw-max-h-[108px] tw-max-w-[204px] tw-flex-col tw-gap-2">
          <>
            <h4 className="tw-mt-2 tw-text-ellipsis tw-text-xxs tw-font-medium tw-text-grey-600 tw-line-clamp-3">
              {title}
            </h4>
          </>
          <>
            <p className="font-['Satoshi-Medium'] tw-mb-2 tw-text-xs tw-font-medium">
              {description}
            </p>
          </>
        </div>
      </div>
    </li>
  )
}
