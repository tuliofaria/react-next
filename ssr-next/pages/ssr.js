import { useState } from "react"

const Ssr = (props) => {
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
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await fetch('https://httpbin.org/uuid')
  const json = await data.json()
  return {
    props: {
      uuid: json.uuid,
      secret: 'asafasdf'
    },
  }
}


export default Ssr