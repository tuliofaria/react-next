import { useState } from "react"

const WithData = (props) => {
  const [show, setShow] = useState(false)
  const showClick = () => {
    setShow(true)
  }
  return (
    <>
      <h1 onClick={showClick}>With data</h1>
      <p>With data</p>
      <pre>{props.uuid}</pre>
      { show && <p>Secret: {props.secret}</p>}
      {process.env.NEXT_PUBLIC_MY_VAR}
    </>
  )
}

export async function getStaticProps(context) {
  const data = await fetch('https://httpbin.org/uuid')
  const json = await data.json()
  console.log('DOMAIN', process.env.DOMAIN)
  return {
    props: {
      uuid: json.uuid,
      secret: 'asafasdf'
    },
  }
}

export default WithData