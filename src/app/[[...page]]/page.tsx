import { Content, fetchEntries, fetchOneEntry } from "@builder.io/sdk-react"
import React from "react"

const apiKey = 'f391e35846a54704bb2daac8fe21d4b2'

export async function pages() {
  return fetchEntries({ model: "page", apiKey })
}

export async function page(urlPath: string) {
  return fetchOneEntry({ model: "page", apiKey, userAttributes: { urlPath }})
}

export async function generateStaticParams() {
  console.log((await pages()).map((page) => ({ page })))
  return (await pages()).map((page) => ({ page }))
}

export default async function Page(props: { params: { page: string } }) {
  const content = await page(props.params.page)

  return <Content content={content} model="page" apiKey={apiKey} />
}
