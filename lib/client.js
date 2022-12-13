import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'oez74s3l',
    dataset: 'production',
    apiVersion: '2022-07-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
const builder = imageUrlBuilder(client)
export const urlFor = (source) => {
    return builder.image(source)
}

