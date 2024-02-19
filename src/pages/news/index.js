import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./index.css"

import Layout from "@components/layout"

const News = () => {
  const { directus } = useStaticQuery(graphql`{
    directus {
      news {
        id
        title
        content
      }
    }
  }`)
  return (
    <Layout>
      {
        directus.news.map(car => (
          <div key={car.id} className="car-item">
            <h3>{car.title}</h3>
            <p>{car.content}</p>
            {/* <img
              className="car-pic"
              src={'//directus-t.itcast.cn/assets/' + car.pic.id}
              alt=""
            /> */}
          </div>
        ))
      }
    </Layout> 
  )
}
export default News

export async function config() {
  return ({ params }) => {
    return {
      defer: true
    }
  }
}

