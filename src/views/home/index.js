import React, { Component } from 'react'
import Layout from '../../layouts/default'
import { Menu } from 'antd'

export default class Home extends Component {
  render () {
    return (
      <Layout {...this.props}>
        <div>
          <Menu>
            {
              years.map((e, i) => {
                <Menu.Item>
                  <a href={`/year/${e}`}>{e}年上映</a>
                </Menu.Item>
              })
            }
          </Menu>
        </div>
      </Layout>
    )
  }
}
