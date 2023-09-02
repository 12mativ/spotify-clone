import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={142}
    height={40}
    viewBox="0 0 142 40"
    backgroundColor="#ededed"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="142" height="40" />
  </ContentLoader>
)

export default Skeleton

