// eslint-disable-next-line react/prop-types
const Tab = ({active,onClickTab}) => {
  return (
    <div>
    <div className="tab">
     <div className={`tablinks ${active===0 && 'active'}`} onClick={()=> onClickTab(0)}>Fetch Config</div>
   <div  className={`tablinks ${active===1 && 'active'}`}  onClick={()=> onClickTab(1)}>Update Remark</div>

  </div></div>
  )
}

export default Tab