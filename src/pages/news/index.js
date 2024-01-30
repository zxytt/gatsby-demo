import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./index.css"

import Layout from "@components/layout"

const News = () => {
  const { directus } = useStaticQuery(graphql`{
    directus {
      cars {
        id
        name
        type
      }
    }
  }`)
  console.log('directus', directus);
  return (
    <Layout>
      {
        directus.cars.map(car => (
          <div key={car.id} className="car-item">
            <span>{car.name}</span>
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

// export async function config() {
//   return ({ params }) => {
//     return {
//       defer: true
//     }
//   }
// }

