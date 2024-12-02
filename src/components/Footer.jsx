export default function Footer(props) {
  const { showModal, handleToggleModal, data } = props

  return (
      <footer>
          <div className="bgGradient"></div>
          <div>
              <h1>NASA's ASTRONOMY PICTURE OF THE DAY</h1>
              <h2>{data?.title}</h2>
              <h1><i class="fa-regular fa-copyright"></i> {data?.copyright} </h1>             
          </div>
          <button onClick={handleToggleModal}>
              <i className="fa-solid fa-circle-info"></i>
          </button>
      </footer>
  )
}